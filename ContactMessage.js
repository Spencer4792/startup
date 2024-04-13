const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('ContactMessage', contactMessageSchema);

const ContactMessage = require('./ContactMessage'); 

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).send('Message received successfully.');
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).send('Failed to save message.');
  }
});
