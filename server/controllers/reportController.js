const {User, Report, Comment} = require('../models/models')
const ApiError = require('../error/ApiError')

class reportController {
    async getReports(req, res, next) {
        try {   
            const getAllReports = await Report.findAll();
            return res.json(getAllReports);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    };

    async processReport(req, res, next) {
        try {
            
            const { reportId } = req.params;

            const report = await Report.findByPk(reportId);

            if (!report) {
                return res.status(404).json({ message: 'Report not found' });
            }

            const comment = await Comment.findByPk(report.commentId);

            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }

            await User.decrement('rating', { where: { id: comment.userId } });

            await report.destroy();
            await comment.destroy();

            return res.status(200).json({ message: 'Report processed successfully' });
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    };
    
    async deleteReport(req, res, next) {
        try {   
            const { reportId } = req.params;

            const report = await Report.findByPk(reportId);

            if (!report) {
                return res.status(404).json({ message: 'Report not found' });
            }

            await Report.destroy({ where: { id: reportId } });

            return res.status(200).json({ message: 'Report deleted successfully' });
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    };
};

module.exports = new reportController()