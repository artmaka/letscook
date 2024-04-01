const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/create-category', categoryController.createCategory);
router.get('/all-categories', categoryController.getAllCategories);

module.exports = router;
