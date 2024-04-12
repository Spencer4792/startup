const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'LoginInfo' });

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();

  const salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(this.password, salt, 1000, 64, `sha512`).toString(`hex`);
  next();
});

module.exports = mongoose.model('User', userSchema);