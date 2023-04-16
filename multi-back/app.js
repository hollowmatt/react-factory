const express = require('express');
require('./db');

const app = express();
const PORT = process.env.PORT || 4040;

app.get('/', (req, res) => {
  res.send('<h2>Welcome Home!</h2>');
});

app.listen(PORT, () => {
  console.log('server running on port', PORT);
});