const express = require('express');
const kullanici = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

kullanici.use(bodyParser.urlencoded({ extended: false }));

kullanici.get('/', function (req, res) {
  res.send('kullanicilar');
});

kullanici.get('/giris', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'kullanici', 'giris_yap.html'));


});

kullanici.get('/kayit', function (req, res) {
  res.send('kayit-registiration');
});

kullanici.post('/kullanicidogrula', (req, res) => {
  const { kadi, sifre } = req.body;
  if (kadi == 'deneme' && sifre == '123456') {
    res.sendFile(path.join(__dirname, '..', '..', 'profil-bilgisi', 'profil.html'));
  } else {
    res.send(
      'Hatali Giris Yaptınız.</br> <a href="/kullanici/giris_yap">Tekrar dene</a>  '
    );
  }
});

module.exports = kullanici;
