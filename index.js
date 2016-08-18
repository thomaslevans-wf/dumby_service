const express = require('express');

const app = express();

app.get('/resource/coal', (req, res) => {
  res.send({resource: 'coal'});
});

app.listen(1234, () => {
  console.log('dumby service listening on port 1234...');
});
