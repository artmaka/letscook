const jwt = require('jsonwebtoken');


module.exports = function(role, id) {
    return function(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if(decoded.role == "USER" && decoded.id != id) {
                return res.status(403).json({ message: "You're not a recipe owner" });
            }

            if(decoded.role == "ADMIN" && decoded.role !== role) {
                return res.status(403).json({ message: "Don't have rules" });
            }
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid/expired token or user is not authorized" });
        }
    };
};
