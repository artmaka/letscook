const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', userController.regist);
router.post('/login', userController.login);
router.get('/check-auth'/*, authMiddleware*/, userController.checkAuth);
router.put('/profile'/*, authMiddleware*/, userController.updateProfile);

module.exports = router
