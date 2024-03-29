const express = require('express');
const router = express.Router();
/*const RecipeController = require('../controllers/RecipeController');
const authMiddleware = require('../middlewares/authMiddleware');
const ownerMiddleware = require('../middlewares/ownerMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');*/

router.get('/'/*, RecipeController.getAllRecipes*/);
router.get('/:id'/*, RecipeController.getRecipeById*/);
router.post('/'/*, authMiddleware, RecipeController.createRecipe*/);
router.put('/:id'/*, [authMiddleware, ownerMiddleware], RecipeController.updateRecipe*/);
router.delete('/:id'/*, [authMiddleware, ownerMiddleware, adminMiddleware], RecipeController.deleteRecipe*/);

module.exports = router;
