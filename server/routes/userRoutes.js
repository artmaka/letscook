const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', userController.regist);
router.post('/login', userController.login);
router.get('/check-auth'/*, authMiddleware*/, userController.checkAuth);
router.put('/profile'/*, authMiddleware*/, userController.updateProfile);
router.put('/report'/*, authMiddleware*/, userController.reportProfile);

module.exports = router
