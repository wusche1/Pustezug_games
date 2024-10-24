// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');
console.log("attempting to log the api key");
console.log(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json' // Make sure we specify content type
    };
    

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Success' }) // Always return JSON
        };
    }

    try {
        // Log the incoming request
        console.log('Received event:', event);
        console.log('Request body:', event.body);

        // Validate that we have a body
        if (!event.body) {
            throw new Error('No request body received');
        }

        // Parse the body
        const { recipientEmail, messageText } = JSON.parse(event.body);

        // Validate required fields
        if (!recipientEmail || !messageText) {
            throw new Error('Missing required fields');
        }

        // Set your API key
        
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: recipientEmail,
            from: 'pustezug@gmail.com', // your verified sender
            subject: 'Your Secret Santa Lot',
            text: messageText,
        };

        console.log('Attempting to send email:', msg);

        await sgMail.send(msg);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: 'Email sent successfully!',
                recipient: recipientEmail
            })
        };
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: error.code || 500,
            headers,
            body: JSON.stringify({
                error: error.message || 'Internal server error',
                details: error.response?.body || {}
            })
        };
    }
};