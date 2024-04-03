const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/api/login', (req, res) => {
  //Login logic will go here in the future
});