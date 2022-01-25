import express from 'express';
import { getFood, getFoods, updateFood, createFood, deleteFood } from '../controllers/foods.js';

const router = express.Router();

router.route('/').get(getFoods).post(createFood);
router.route('/:id').get(getFood).put(updateFood).delete(deleteFood);

export default router;
