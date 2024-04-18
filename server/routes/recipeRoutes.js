const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');
const checkMiddleware = require('../middleware/checkRoleMiddleware');

router.get('/all-recipes', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/create-recipe', authMiddleware, recipeController.createRecipe);
router.get('/:id/update', authMiddleware, checkMiddleware('USER'), checkMiddleware('ADMIN'), recipeController.updateRecipe);
router.delete('/:id/delete', authMiddleware/*, checkMiddleware('USER'), checkMiddleware('ADMIN')*/, recipeController.deleteRecipe);

module.exports = router; 