require('dotenv').config();
const axios = require('axios');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

async function getToken() {
  try {
    const response = await axios.post('https://auth.example.com/oauth2/token', {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials'
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
}

getToken().then(token => {
  console.log('Access Token:', token);
}).catch(error => {
  console.error('Failed to get token', error);
});
