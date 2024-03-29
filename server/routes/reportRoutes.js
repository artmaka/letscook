const express = require('express');
const router = express.Router();
//const ModerationController = require('../controllers/ModerationController');
//const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/reports'/*, adminMiddleware, ModerationController.getReports*/);
router.put('/reports/:reportId'/*, adminMiddleware, ModerationController.processReport*/);

module.exports = router;
