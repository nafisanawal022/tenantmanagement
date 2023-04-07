const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
  flatNo: { type: String, required: true },
  rent: { type: Number, required: true }
});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;
