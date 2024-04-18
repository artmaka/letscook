const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');
const checkMiddleware = require('../middleware/checkRoleMiddleware');

router.get('/:recipeId/comments', commentController.getAllComments);
router.post('/:recipeId/create-comment', authMiddleware, commentController.createComment);
router.delete('/delete/:commentId', authMiddleware, checkMiddleware('USER'), checkMiddleware('ADMIN'), commentController.deleteComment);
router.put('/report/:commentId', authMiddleware, commentController.reportComment);

module.exports = router;
