import { Handler } from '@netlify/functions';
import { google } from 'googleapis';

const SHEET_ID = '16C9Y9gYmEoZU6CHQEDGJNEJyktMTa9WvE7uOnvgG1JI';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { date, time, guests, name, email, phone } = data;

    // Validate required fields
    if (!date || !time || !guests || !name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Check if environment variables are set
    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_PRIVATE_KEY) {
      console.error('Missing environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Configuration manquante',
          details: 'Les variables d\'environnement ne sont pas configurées'
        }),
      };
    }

    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row data
    const submissionDate = new Date().toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
    });

    const values = [[date, time, name, email, phone, guests, submissionDate]];

    // Try different sheet names
    const sheetNames = ['Feuille 1', 'Sheet1', 'Feuille1'];
    let success = false;
    let lastError = null;

    for (const sheetName of sheetNames) {
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: SHEET_ID,
          range: `${sheetName}!A:G`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values,
          },
        });
        success = true;
        break;
      } catch (err) {
        lastError = err;
        continue;
      }
    }

    if (!success) {
      throw lastError;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Réservation enregistrée avec succès' 
      }),
    };
  } catch (error) {
    console.error('Error saving reservation:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erreur lors de l\'enregistrement de la réservation',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};
