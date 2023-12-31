const express = require('express');
const app = express();

// Kullanıcı bilgileri
const users = {
    "mutu": { isim: "Umut", soyad: "Tanrıverdi", kimlikno: "12547859623", dogumtarihi: "08-11-2002", adres: "Menemen Seyrek", sifre: "umut123D" },
    "ulasucan": { isim: "Ulaş", soyad: "Uçan", kimlikno: "12547859624", dogumtarihi: "08-11-2004", adres: "Menemen Egekent", sifre: "ulas123D" },
    "mataberk": { isim: "Ataberk", soyad: "Öge", kimlikno: "12547859625", dogumtarihi: "08-11-2001", adres: "Menemen Seyrek", sifre: "ataberk123D" }
};

// Kullanıcı bilgilerini döndüren API endpoint'i
app.get('/api/profile/:username', (req, res) => {
    const username = req.params.username;
    const user = users[username];

    if (user) {
        // Kullanıcı bilgilerini JSON formatında döndürme
        res.json(user);
    } else {
        // Kullanıcı bulunamazsa hata mesajı döndürme
        res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }
});

// Sunucuyu belirtilen portta başlatma
const port = 3300;
app.listen(port, () => {
    console.log(`Sunucu port ${port} üzerinde çalışıyor.`);
});