require('dotenv').config();
const mongoose = require('mongoose');
const User = require('/User');
const express = require('express');
const app = express();
app.use(express.json());

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(3000, () => {
  console.log(`Server running`);
});

app.post('/api/signup', async (req, res) => {
  try {
    const { name, phoneNumber, email, password } = req.body;
    const newUser = new User({ username: name, phoneNumber, email, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return res.status(400).send('Email already exists');
    }
    res.status(500).send('Error registering new user');
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).send('User not found');
      }
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
          return res.status(400).send('Invalid credentials');
      }
      res.status(200).send('Login successful');
  } catch (error) {
      res.status(500).send('Server error');
  }
});
