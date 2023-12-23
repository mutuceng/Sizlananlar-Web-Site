const { Client } = require('pg');

// PostgreSQL veritabanına bağlanma işlemi
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sizlananlar',
  password: '1234',
  port: 5432,
});

client.connect()
  .then(() => console.log('PostgreSQL veritabanına bağlandı'))
  .catch(err => console.error('Bağlantı hatası', err));

// Örnek bir veri ekleme sorgusu
const query = {
  text: 'INSERT INTO firma(firmaadi, firmaadres, firmaemail,firmatelefonno,firmasifre) VALUES($1, $2,$3,$4,$5)',
  values: ['MNG Kargo', 'İstiklal Mahallesi,122. Sokak','mngkargo@hotmail.com','5356264271','123456Mng'],
};

client.query(query)
  .then(() => console.log('Veri başarıyla eklendi'))
  .catch(err => console.error('Sorgu hatası', err))
  .finally(() => client.end());