import { Handler } from '@netlify/functions';

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
    const { name, email, phone, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Send email using Netlify's built-in email service
    // Note: You'll need to configure this in Netlify
    const emailContent = `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Téléphone: ${phone || 'Non renseigné'}

Message:
${message}

---
Envoyé depuis le formulaire de contact du site
    `.trim();

    // For now, we'll just log it and return success
    // In production, you would integrate with an email service like SendGrid, Mailgun, etc.
    console.log('Contact form submission:', emailContent);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Message envoyé avec succès' 
      }),
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erreur lors de l\'envoi du message',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};
