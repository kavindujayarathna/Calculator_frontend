const express = require('express');
const app = express();
const path = require('path');

const port = 8000; // You can change this to any desired port number

// Set static folder for serving CSS and JS files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve the index.html page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

