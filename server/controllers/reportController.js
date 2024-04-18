const {Report} = require('../models/models')
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
           
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    };
    
    async deleteReport(req, res, next) {
        try {   
           
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    };
};

module.exports = new reportController()