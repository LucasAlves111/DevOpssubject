import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD',
  database: 'metro'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// API endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql = `
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.execute(sql, [name, email, subject, message], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false });
    }
    res.json({ success: true });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
