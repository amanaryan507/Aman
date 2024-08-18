// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./emailController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/send-email', sendEmail);

// Start server
app.listen(port, () => {
  console.log(`Email sender API is running at http://localhost:${port}`);
});