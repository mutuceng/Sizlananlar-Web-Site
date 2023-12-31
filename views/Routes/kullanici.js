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

var users = {
  "mutu": { isim: "Umut", soyad:"Tanrıverdi", kimlikno: "12547859623", dogumtarihi: "08-11-2002", adres:"Menemen Seyrek", sifre: "umut123D" },
  "ulasucan": { isim: "Ulaş",soyad:"Uçan", kimlikno: "12547859624", dogumtarihi: "08-11-2004", adres:"Menemen Egekent",sifre: "ulas123D" },
  "mataberk": { isim: "Ataberk",soyad:"Öge", kimlikno: "12547859625", dogumtarihi: "08-11-2001", adres:"Menemen Seyrek",sifre: "ataberk123D" }
};

var brands = {
  "Hepsiburada:": {ad: "Hepsiburada", adres: "İstanbul Kadıköy", email: "hepsiburada@gmail.com", telefonno: "03123001212", sifre: "hepsiburada123D"},
  "Trendyol:": {ad: "Trendyol", adres: "", email: "trendyol@gmail.com", telefonno: "03123001313", sifre: "trendyol123D"},
  "Şikayet Var": {ad: "Şikayetvar", adres: "", email: "", telefonno: "03123001414", sifre: "şikayetvar123D"},
  "Aras Kargo": {ad: "ArasKargo", adres: "", email: "", telefonno: "03123001515", sifre: "aras123D"}
}

kullanici.post('/kullanicidogrula', (req, res) => {
  const { kadi, sifre } = req.body;
  var username = kadi;
  var user = users[username];
  if (sifre == user.sifre){
    res.sendFile(path.join(__dirname, '..', '..', 'profil-bilgisi', 'profil.html'));
  } else {
    res.send(
      'Hatali Giris Yaptınız.</br> <a href="/kullanici/giris_yap">Tekrar dene</a>  '
    );
  }
});

module.exports = kullanici;
