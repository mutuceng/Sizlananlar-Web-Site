const { Client } = require('pg');

// PostgreSQL veritabanına bağlanma işlemi
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sizlananlar',
  password: '1234',
  port: 5432,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Form gönderimini işleyen endpoint
app.post('/submit-form', async (req, res) => {
  try {
    const { firmaadi, firmaaadres, firmaemail, firmatelefonno, sifre } = req.body;

    // Veritabanınızdaki gerçek tablo adıyla 'your_table_name' yerine değiştirin
    const query = `
      INSERT INTO firma (firmaadi, firmaadres, firmaemail, firmatelefonno, firmasifre) 
      VALUES ($1, $2, $3, $4, $5)`;

    // Form verileriyle sorguyu çalıştırma
    await pool.query(query, [firmaadi, firmaaadres, firmaemail, firmatelefonno, sifre]);

    res.status(200).send('Form verileri başarıyla veritabanına eklendi.');
  } catch (error) {
    console.error('Hata oluştu:', error);
    res.status(500).send('Form işlenirken bir hata oluştu.');
  }
});

const PORT = 8080; // Kullanılacak port numarasını değiştirin
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} numaralı portta çalışıyor`);
});