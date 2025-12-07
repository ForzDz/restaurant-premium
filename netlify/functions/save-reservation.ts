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

    // Append to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Feuille 1!A:G', // Adjust if your sheet has a different name
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

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
