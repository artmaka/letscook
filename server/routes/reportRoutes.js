const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
//const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/reports'/*, adminMiddleware*/, reportController.getReports);
router.put('/reports/:reportId'/*, adminMiddleware*/, reportController.processReport);

module.exports = router;
