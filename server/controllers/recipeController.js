const uuid = require('uuid');
const path = require('path');
const fs = require('fs')

const { Recipe, User, Category } = require('../models/models');
const ApiError = require('../error/ApiError');

class recipeController {
    async getAllRecipes(req, res, next) {
        try {
            let { categoryId, limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;
            let recipes;

            if (!categoryId) {
                recipes = await Recipe.findAndCountAll({ limit, offset });
            } else {
                recipes = await Recipe.findAndCountAll({ where: { categoryId }, limit, offset });
            }

            return res.json(recipes);
        } catch (error) {
            next(ApiError.internalServerError(error.message));
        }
    }

    async getRecipeById(req, res, next) {
        try {
            const { id } = req.params;
            const recipe = await Recipe.findOne({
                where: { id },
                include: [
                    { model: User, attributes: ['username'] },
                    { model: Category, attributes: ['name'] }
                ]
            });

            if (!recipe) {
                return next(ApiError.notFound('Recipe not found'));
            }

            return res.json(recipe);
        } catch (error) {
            next(ApiError.internalServerError(error.message));
        }
    }

    async createRecipe(req, res, next) {
        try {
            const { name, userId, categoryId, description, ingredients, calories, process } = req.body;
            const { image } = req.files;
            let fileName = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const recipe = await Recipe.create({ name, userId, categoryId, description, ingredients, calories, process, image: fileName });
            return res.json(recipe);
        } catch (error) {
            next(ApiError.internalServerError(error.message));
        }
    }

    async updateRecipe(req, res, next) {
        try {
            const { id } = req.params;
            const { name, categoryId, description, ingredients, calories, process } = req.body;
            const recipe = await Recipe.findByPk(id);
        
            if (!recipe) {
                return next(ApiError.notFound('Recipe not found'));
            }
    
            if (req.files && req.files.image) {
                const { image } = req.files
                let fileName = uuid.v4() + ".jpg";
                await image.mv(path.resolve(__dirname, '..', 'static', fileName));
    
                if (recipe.image) {
                    const oldImagePath = path.resolve(__dirname, '..', 'static', recipe.image);
                    if (fs.existsSync(oldImagePath)) {
                        fs.unlink(oldImagePath, (error) => {
                            if (error) {
                                return next(ApiError.notFound('Recipe not found'));
                            }
                        });
                    }
                }
    
                recipe.image = fileName;
            }
    
            recipe.name = name;
            recipe.categoryId = categoryId;
            recipe.description = description;
            recipe.ingredients = ingredients;
            recipe.calories = calories;
            recipe.process = process;
    
            await recipe.save();
        
            return res.json(recipe);
        } catch (error) {
            next(ApiError.internalServerError(error.message));
        }
    }
    

    async deleteRecipe(req, res, next) {
        try {
            const { id } = req.params;
            const recipe = await Recipe.findByPk(id);
    
            if (!recipe) {
                return next(ApiError.notFound('Recipe not found'));
            }
    
            if (recipe.image) {
                const imagePath = path.resolve(__dirname, '..', 'static', recipe.image);
                fs.unlinkSync(imagePath);
            }
    
            await recipe.destroy();
            return res.json({ message: 'Recipe deleted successfully' });
        } catch (error) {
            next(ApiError.internalServerError(error.message));
        }
    }
}

module.exports = new recipeController();
