const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/register', (req, res, next) => userController.regist(req, res, next));
router.post('/login', (req, res, next) => userController.login(req, res, next));
router.get('/check-auth', authMiddleware, (req, res, next) => userController.checkAuth(req, res, next));
router.get('/:userId/all-recipes-with-user-comment', authMiddleware, checkMiddleware('ADMIN'), (req, res, next) => userController.getAllUser(req, res, next));

module.exports = router;