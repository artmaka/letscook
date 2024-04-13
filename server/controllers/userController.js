const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Recipe, Comment} = require('../models/models');
const ApiError = require('../error/ApiError');

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'});
}

class userController {
    async regist(req, res, next) {
        try {
            const {username, email, password, role} = req.body;
            if (!email || !password) {
                return next(ApiError.notFound('Uncorrect email or password'));
            }
            const userCheck = await User.findOne({where: {email}});
            if (userCheck) {
                return next(ApiError.userIsAlreadyRegistered('User is already registered'));
            }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({username, email, role, password: hashPassword});

            const jwtToken = generateJwt(user.id, user.email, user.role);

            return res.json({ token: jwtToken });
        } catch (error) {
            return next(ApiError.internalServerError(error.message)); 
        }
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return next(ApiError.notFound('User is not found'));
        }
    
        const comparePassword = bcrypt.compareSync(password, user.password); 
    
        if (!comparePassword) {
            return next(ApiError.notFound('Uncorrect passsword'));
        }
    
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async checkAuth(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
        } catch (error) {
            return next(ApiError.internalServerError(error.message)); 
        } 
    }

    async getAllUser(req, res, next) {
        try {   
            const userId = req.params.userId;

            const userComments = await Comment.findAll({ where: { userId } });
            const recipeIds = userComments.map(comment => comment.recipeId);

            const userRecipes = await Recipe.findAll({ where: { id: recipeIds } });

            res.json(userRecipes);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    }
}

module.exports = new userController();
