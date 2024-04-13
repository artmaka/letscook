const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');
const checkMiddleware = require('../middleware/checkRoleMiddleware');

router.put('/:recipeId/report', authMiddleware, reportController.putReport);
router.get('/reports', authMiddleware, checkMiddleware('ADMIN'), reportController.getReports);
router.put('/reports/:reportId', authMiddleware, checkMiddleware('ADMIN'), reportController.processReport);

module.exports = router;
