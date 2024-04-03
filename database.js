const mongoose = require('mongoose');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.Spencer4792}:${config.r38b2gLvhy3o9JBN}@${config.Spencer4792.Cluster0.mongodb.net}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

module.exports = mongoose;
