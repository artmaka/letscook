const ApiError = require('../error/ApiError');
const { Comment, User, Recipe, Report } = require('../models/models');

class commentController {
    async getAllComments(req, res, next) {
        try {
            const { recipeId } = req.params;
            const comments = await Comment.findAll({ 
            where: { recipeId },
            include: [{ model: User, attributes: ['username'] }]
        });

        if (!comments || comments.length === 0) {
            return next(ApiError.notFound('Comments not found for this recipe'));
        }
    
            if (!comments || comments.length === 0) {
                return next(ApiError.notFound('Comments not found for this recipe'));
            }
    
            return res.json(comments);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    }

    async createComment(req, res, next) {
        try {
            const { text } = req.body;
            const userId = req.user.id;
            const { recipeId } = req.params;
    
            if (!text) {
                return next(ApiError.notFound('Comment text is required'));
            }
    
            const recipe = await Recipe.findByPk(recipeId);
            if (!recipe) {
                return next(ApiError.notFound('Recipe not found'));
            }
    
            const comment = await Comment.create({ text, userId, recipeId });
    
            return res.json(comment);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    }
    
    async deleteComment(req, res, next) {
        try {
            const userId = req.user.id; 
            const { commentId } = req.params;

    
            if (isNaN(commentId)) {
                return next(ApiError.notFound('Invalid comment id'));
            }
    
            const comment = await Comment.findOne();
    
            if (!comment) {
                return next(ApiError.notFound('Comment not found'));
            }
    
            if (comment.userId !== userId) {
                return next(ApiError.forbidden('You are not authorized to delete this comment'));
            }
    
            await comment.destroy();
            return res.json({ message: 'Comment deleted successfully' });
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    }
    
    async reportComment(req, res, next) {
        try {
            const { reason } = req.body;
            const userId = req.user.id;
            const { commentId } = req.params;
    
            if (!reason) {
                return next(ApiError.notFound('Reason for reporting is required'));
            }
    
            const comment = await Comment.findByPk(commentId);
            if (!comment) {
                return next(ApiError.notFound('Comment not found'));
            }
    
            const report = await Report.create({ reason, userId, commentId });
    
            return res.json(report);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    }
}

module.exports = new commentController()