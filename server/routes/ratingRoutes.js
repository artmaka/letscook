const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

router.post('/:recipeId/rating', ratingController.rateRecipe);

module.exports = router