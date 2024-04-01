const {Report} = require('../models/models')
const ApiError = require('../error/ApiError')

class reportController {
    async getReports(req, res) {
        const getAllReports = await Category.findAll()
        return res.json(getAllReports)
    }

    async processReport(req, res) {

    }
}

module.exports = new reportController()