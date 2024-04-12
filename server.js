require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./user');
const express = require('express');
const app = express();
const WebSocket = require('ws');
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
app.use(express.json());

mongoose.connect(mongoURI)
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

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.post('/api/feedback', async (req, res) => {
  const { feedback } = req.body;
  console.log('Feedback received:', feedback);
  res.status(200).send({ message: 'Feedback received' });
});
