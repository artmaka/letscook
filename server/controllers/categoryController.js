const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class categoryController {
    async createCategory(req, res, next) {
        try {
            const {name} = req.body;

            const existingCategory = await Category.findOne({ name });
            if (existingCategory) {
                return next(ApiError.alreadyExist('Category is already exist' ));
            }

            const category = await Category.create({name});

            return res.json(category);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    };
    
    async getAllCategories(req, res, next) {
        try {
            const allCategories = await Category.findAll();

            return res.json(allCategories);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    };
};

module.exports = new categoryController();