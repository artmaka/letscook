const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const checkMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create-category', authMiddleware, checkMiddleware('ADMIN'),  categoryController.createCategory);
router.get('/all-categories', categoryController.getAllCategories);

module.exports = router;