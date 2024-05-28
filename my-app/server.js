const express = require('express')
const mysql=require('mysql')
const app=express()
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Charantejreddy@9',
    database:'details'
})
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
  
  // Define routes
  app.use(express.json());
  app.post('/api/addUser', (req, res) => {
    const { firstName, lastName } = req.body;
    const queryString = 'INSERT INTO userdetails (firstName, lastName) VALUES (?, ?)';
    connection.query(queryString, [firstName, lastName], (error, results, fields) => {
      if (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Error adding user');
        return;
      }
      res.send('User added successfully');
    });
  });
  
  // Start server
  const PORT=3004
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });