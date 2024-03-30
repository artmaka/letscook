const ApiError = require('../error/ApiError')

class userController {
    async regist(req, res) {

    }

    async login(req, res) {

    }

    async checkAuth(req, res, next) {
        const {id} = req.query
        if(!id) {
            next(ApiError.badRequest('не задан айди'))
        }
        res.json(id);
    }

    async updateProfile(req, res) {

    }
}

module.exports = new userController()