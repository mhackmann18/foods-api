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
  carbohydrates: {
    type: Number,
    required: true
  },
  totalFat: {
    type: Number,
    required: true
  },
  saturatedFat: {
    type: Number,
    required: true
  },
  transFat: {
    type: Number,
    required: true
  },
  cholesterol: {
    type: Number,
    required: true
  },
  sodium: {
    type: Number,
    required: true
  },
  dietaryFiber: {
    type: Number,
    required: true
  },
  totalSugars: {
    type: Number,
    required: true
  },
  addedSugars: {
    type: Number,
    required: true
  },
  vitaminD: {
    type: Number,
    required: true
  },
  calcium: {
    type: Number,
    required: true
  },
  iron: {
    type: Number,
    required: true
  },
  potassium: {
    type: Number,
    required: true
  },
  monounsaturatedFat: {
    type: Number
  },
  polyunsaturatedFat: {
    type: Number
  },
  solubleFiber: {
    type: Number
  },
  insolubleFiber: {
    type: Number
  },
  sugarAlcohols: {
    type: Number
  },
  biotin: {
    type: Number
  },
  choline: {
    type: Number
  },
  monounsaturatedFat: {
    type: Number
  },
  caloriesFromFat: {
    type: Number
  },
  phosphorous: {
    type: Number
  },
  otherCarbohydrates: {
    type: Number
  },
  vitaminA: {
    type: Number
  },
  vitaminC: {
    type: Number
  },
  vitaminE: {
    type: Number
  },
  vitaminK: {
    type: Number
  },
  thiamin: {
    type: Number
  },
  iodine: {
    type: Number
  },
  riboflavin: {
    type: Number
  },
  niacin: {
    type: Number
  },
  folate: {
    type: Number
  },
  vitaminB12: {
    type: Number
  },
  biotin: {
    type: Number
  },
  pantothenicAcid: {
    type: Number
  },
  magnesium: {
    type: Number
  }
});

module.exports = mongoose.model('FoodSchema', FoodSchema);
