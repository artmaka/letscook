const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');
const checkMiddleware = require('../middleware/checkRoleMiddleware');

router.get('/all-reports', authMiddleware, checkMiddleware('ADMIN'), reportController.getReports);
router.put('/process/:reportId', authMiddleware, checkMiddleware('ADMIN'), reportController.processReport);
router.delete('/delete/:reportId', authMiddleware, checkMiddleware('ADMIN'), reportController.deleteReport);

module.exports = router;
