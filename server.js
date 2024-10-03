// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define your custom API endpoint
  server.get('/api/news', (req, res) => {
    // Your news API logic here
    res.json({ message: 'This is your news API response' });
  });

  // Handle Next.js pages and assets
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 5000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${port}`);
  });
});