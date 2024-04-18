const jwt = require('jsonwebtoken');


module.exports = function(role, userId) {
    return function(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            
            if(decoded.role == "USER" && decoded.id != userId) {
                return res.status(403).json({ message: "You're have no rules" });
            }

            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid/expired token or user is not authorized" });
        }
    };
};
