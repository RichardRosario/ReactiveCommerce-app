const express = require('express');

const app = express();

app.listen(4000, () => {
  console.log('App running at port 5000');
})

module.exports = app;