const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  team: String,
  price: Number,
});

module.exports = mongoose.model('Player', playerSchema);
