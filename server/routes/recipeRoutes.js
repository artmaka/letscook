const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
/*const authMiddleware = require('../middlewares/authMiddleware');
const ownerMiddleware = require('../middlewares/ownerMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');*/

router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/'/*, authMiddleware*/, recipeController.createRecipe);
router.put('/:id'/*, [authMiddleware, ownerMiddleware]*/, recipeController.updateRecipe);
router.delete('/:id'/*, [authMiddleware, ownerMiddleware, adminMiddleware]*/, recipeController.deleteRecipe);


module.exports = router;
