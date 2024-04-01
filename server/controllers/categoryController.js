const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')


class categoryController {
    async createCategory(req, res) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }
    
    async getAllCategories(req, res) {
        const allCategories = await Category.findAll()
        return res.json(allCategories)
    }
}

module.exports = new categoryController()