const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
/*const authMiddleware = require('../middlewares/authMiddleware');
const ownerOrAdminMiddleware = require('../middlewares/ownerOrAdminMiddleware');*/

router.get('/:id/comments', commentController.getComment);
router.post('/:id/comments'/*, authMiddleware*/, commentController.createComment);
router.delete('/:id/comments/:commentId'/*, [authMiddleware, ownerOrAdminMiddleware]*/, commentController.deleteComment);

module.exports = router;
