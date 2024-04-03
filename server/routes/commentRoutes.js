const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
/*const authMiddleware = require('../middlewares/authMiddleware');
const ownerOrAdminMiddleware = require('../middlewares/ownerOrAdminMiddleware');*/



router.get('/:id/comments', commentController.getAllComment);
router.post('/:id/create-comment'/*, authMiddleware*/, commentController.createComment);
router.delete('/:id/comments/:commentId/delete'/*, [authMiddleware, ownerOrAdminMiddleware]*/, commentController.deleteComment);
router.put('/:id/comments/:commentId/report'/*, /*authMiddleware*/, commentController.reportComment);

module.exports = router;
