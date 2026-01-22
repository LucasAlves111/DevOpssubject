import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
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

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});


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
