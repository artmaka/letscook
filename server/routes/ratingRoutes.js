const express = require('express');
const router = express.Router();
//const RatingController = require('../controllers/RatingController');

router.post('/:recipeId/rating'/*, RatingController.rateRecipe*/);

module.exports = router;