const axios = require('axios');
const baseURL = process.env.REACT_APP_BASE_URL || 'https://productapi2019.azurewebsites.net/api/product';

// Creating axios instance
module.exports = axios.create({
    baseURL: baseURL
});