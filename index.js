const express = require('express');

const app = express();

app.get('/resource/coal', (req, res) => {
  res.status(200)
    .append('Content-Type', 'application/json')
    .json({resource: 'coal'});
});

app.listen(1234, () => {
  console.log('dumby service listening on port 1234...');
});
