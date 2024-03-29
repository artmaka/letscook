const express = require('express');
const router = express.Router();
/*const CommentController = require('../controllers/CommentController');
const authMiddleware = require('../middlewares/authMiddleware');
const ownerOrAdminMiddleware = require('../middlewares/ownerOrAdminMiddleware');*/

router.get('/:id/comments'/*, CommentController.getCommentsByRecipeId*/);
router.post('/:id/comments'/*, authMiddleware, CommentController.createComment*/);
router.delete('/:id/comments/:commentId'/*, [authMiddleware, ownerOrAdminMiddleware], CommentController.deleteComment*/);

module.exports = router;
