const express = require('express');
const app = express();
const kullanici = express.Router();
const path = require('path');

kullanici.get('/',function(req, res){
    res.send('kullanicilar');
});

kullanici.get('giris', function(req,res){
    res.sendFile(path.join(__dirname,"../","views","kullanici","giris_yap.html"));
});

kullanici.get('/kayit',function(req,res){
    res.send('kayit-registiration');
});