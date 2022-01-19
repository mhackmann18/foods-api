const Food = require('../models/Food');

exports.getFoods = async (req, res, next) => {
  try {
    const foods = await Food.find();

    if(foods){
      res.status(200).json({ success: true, data: foods });
    } else {
      res.status(400).json({ success: false });
    }
  } catch(err) {
    res.status(400).json({ success: false, msg: err });
  }
}
exports.getFood = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);

    if(food){
      res.status(200).json({ success: true, data: food });
    } else {
      res.status(400).json({ success: false });
    }
  } catch(err) {
    res.status(400).json({ success: false, msg: err });
  }
}
exports.updateFood = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if(food){
      res.status(200).json({ success: true, data: food });
    } else {
      res.status(400).json({ success: false });
    }
  } catch(err) {
    res.status(400).json({ success: false, msg: err });
  }
}
exports.createFood = async (req, res, next) => {
  try {
    const food = await Food.create(req.body);

    if(food){
      res.status(200).json({ success: true, data: food });
    } else {
      res.status(400).json({ success: false });
    }
  } catch(err) {
    res.status(400).json({ success: false, msg: err });
  }
}
exports.deleteFood = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);

    if(food){
      res.status(200).json({ success: true, data: food });
    } else {
      res.status(400).json({ success: false });
    }
  } catch(err) {
    res.status(400).json({ success: false, msg: err });
  }
}
