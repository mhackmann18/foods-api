const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [50, "Name must not be longer than 50 characters"]
  },
  brand: {
    type: String,
    trim: true,
    maxlength: [50, "Brand name cannot be longer than 50 characters"]
  },
  servingSize: {
    type: String,
    trim: true,
    required: true,
    maxlength: [20, "Serving size string cannot be longer than 20 characters"]
  },
  calories: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  fat: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('FoodSchema', FoodSchema);
