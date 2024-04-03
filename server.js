require('dotenv').config();
const mongoose = require('mongoose');
const User = require('/User');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/signup', async (req, res) => {
  try {
    const { name, phoneNumber, email, password } = req.body;
    const newUser = new User({ name, phoneNumber, email, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send('Email already exists');
    }
    res.status(500).send('Error registering new user');
  }
});

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@cluster0.fttthpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(3000, () => {
  console.log(`Server running`);
});
