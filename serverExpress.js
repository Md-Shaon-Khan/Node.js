const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Welcome to express server</h1>");
});

app.get('/about', (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});