const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory (images, favicon, etc.)
app.use(express.static(path.join(__dirname)));

// Explicit route for favicon
app.get('/favicon.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'favicon.png'));
});

// Serve index.html for all routes (must be after static files)
app.get('*', (req, res) => {
  // Skip if it's a request for a file (has extension)
  if (req.path.includes('.')) {
    return res.status(404).send('File not found');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

