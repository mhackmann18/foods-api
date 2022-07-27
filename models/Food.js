import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const FoodSchema = new Schema({
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
  units: {
    type: String,
    trim: true,
    required: true,
    enum: ['oz', 'g', 'lbs', 'lb', 'tbsp', 'tsp', 'c', 'count' ]
  },
  unitsPerServing: {
    type: Number,
    required: true
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
    type: Number
  },
  transFat: {
    type: Number
  },
  cholesterol: {
    type: Number
  },
  sodium: {
    type: Number
  },
  dietaryFiber: {
    type: Number
  },
  totalSugars: {
    type: Number
  },
  addedSugars: {
    type: Number
  },
  vitaminD: {
    type: Number
  },
  calcium: {
    type: Number
  },
  iron: {
    type: Number
  },
  potassium: {
    type: Number
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

export default model('FoodSchema', FoodSchema);
