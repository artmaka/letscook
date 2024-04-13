const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/register', userController.regist);
router.post('/login', userController.login);
router.get('/check-auth', authMiddleware, userController.checkAuth);
router.get('/:userId/all-recipes-with-user-comment',authMiddleware, checkMiddleware('ADMIN'), userController.getAllUser);


module.exports = router
5