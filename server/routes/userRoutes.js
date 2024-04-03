const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.regist);
router.post('/login', userController.login);
router.get('/check-auth', authMiddleware, userController.checkAuth);

module.exports = router
