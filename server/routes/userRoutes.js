const express = require('express');
const router = express.Router();
//const UserController = require('../controllers/UserController');
//const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register'/*, AuthController.register*/);
router.post('/login'/*, AuthController.login*/);
router.get('/profile'/*, authMiddleware, UserController.getProfile*/);
router.put('/profile'/*, authMiddleware, UserController.updateProfile*/);

module.exports = router;
