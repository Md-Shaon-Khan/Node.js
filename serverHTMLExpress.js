const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index1.html'));
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});