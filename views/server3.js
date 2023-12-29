const express = require('express');
const app = express();
const kullanici = require('./Routes/kullanici');
const site = require('./Routes/site');
const path = require('path');

app.use('/', site);
app.use('/kullanici', kullanici);

app.use((req, res) => {
  res.status(404);
  res.send('<h1>Sayfa Bulunamadı</h1>');
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Dinlemede http://%s:%s', host, port);
});
