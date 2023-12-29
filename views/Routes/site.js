const express = require('express');
const site = express.Router();

site.get('/', function (req, res) {
  res.send('Anasayfa');
});

site.get('/iletisim', function (req, res) {
  res.send('Iletisim Alani');
});

module.exports = site;
