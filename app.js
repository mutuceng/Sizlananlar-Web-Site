const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sizlananlar',
    password: '1234',
    port: 5432 
});


app.post('/submit-form', async (req, res) => {
    const { firmaadi, firmaadres, firmaemail, firmatelefonno, sifre } = req.body;

    try {
        const defaultPassword = 'varsayilanSifre';
        const query = `
            INSERT INTO firma (firmaadi, firmaadres, firmaemail, firmatelefonno, sifre)
            VALUES ($1, $2, $3, $4, $5)
        `;
        const values = [firmaadi, firmaadres, firmaemail, firmatelefonno, sifre || defaultPassword];

        const client = await pool.connect();
        const result = await client.query(query, values);

        res.send('Veri başarıyla kaydedildi.');
        client.release();

        console.log('Veri başarıyla PostgreSQL veritabanına kaydedildi.');
    } catch (error) {
        console.error('Veri kaydetme hatası:', error);
        res.status(500).send('Veri kaydetme sırasında bir hata oluştu.');
    }
});


app.post('/submit-form-kisisel', async (req, res) => {
    const { kullaniciadi, kullanicisoyadi, kullanicitckimlikno, kullanicidogumtarihi, kullaniciusername, sifre } = req.body;

    try {

        const defaultPassword = 'varsayilanSifre';
        const query = `
            INSERT INTO kullanici (kullaniciadi, kullanicisoyadi, kullanicitckimlikno, kullanicidogumtarihi, kullaniciusername, sifre)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const values = [kullaniciadi, kullanicisoyadi, kullanicitckimlikno, kullanicidogumtarihi, kullaniciusername, sifre || defaultPassword];

        const client = await pool.connect();
        const result = await client.query(query, values);

        res.send('Kişisel kayıt başarıyla tamamlandı.');
        client.release();

        console.log('Veri başarıyla PostgreSQL veritabanına kaydedildi.');
    } catch (error) {
        console.error('Kişisel kayıt hatası:', error);
        res.status(500).send('Kişisel kayıt sırasında bir hata oluştu.');
    }
});

app.post('/login',async(req,res)=> {
    const { kullaniciusername,sifre } = req.body;

    try{

        const query = 'SELECT * FROM kullanici WHERE kullaniciusername = $1 AND sifre = $2';
    
    const result = await pool.query(query ,[kullaniciusername,sifre]);

    if(result.rows.length>0){
        res.send('basarili giris...');
    }
    else{
        res.status(401).send('basarisiz giris..');
    }
}
    catch(error){
        console.error('GİRİS HATASI',error);
        res.status(500).send('Giriş sırasında bir hata oluştu.');
    }
    
})

app.post('/submit-form-sikayet', async (req, res) => {
    const { kullaniciadi, baslik, sikayet, firma, tarih, sikayetdurumu } = req.body;

    try {

        const query = `
            INSERT INTO sizlan (kullaniciadi, baslik, sikayet, firma, tarih, sikayetdurumu)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const values = [kullaniciadi, baslik, sikayet, firma, tarih, sikayetdurumu];

        const client = await pool.connect();
        await client.query(query, values);
        client.release();

        console.log('Veri başarıyla PostgreSQL veritabanına eklendi.');
        

        const selectQuery = 'SELECT * FROM sizlan';
        const result = await pool.query(selectQuery);
        const data = result.rows;

        let cardHTML = '';
        data.forEach(item => {
            cardHTML += `
                <div class="col">
                    <div class="card">
                        <div class="card-header custom-card-header">
                            <h5 class="card-title">${item.baslik}</h5>
                        </div>
                        <div class="card-body">
                            <a href="#" class="card-text">${item.firma}</a>
                            <p class="card-text">${item.sikayet}</p>
                            <h6 class="card-subtitle">${item.tarih} Sitemkar: <a href="#">${item.kullaniciadi}</a></h6>
                        </div>
                        <div class="card-footer custom-card-footer">
                            <p class="card-subtitle">Durumu: ${item.sikayetdurumu}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        res.send(cardHTML);

    } catch (error) {
        console.error('Veri eklenirken veya çekilirken bir hata oluştu:', error);
        res.status(500).send('Veri işleme sırasında bir hata oluştu.');
    }
});

app.listen(3000, () => {
    console.log('Sunucu çalışıyor: http://localhost:3000');
});