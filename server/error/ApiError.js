class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    };

    static internalServerError(message) {
        return new ApiError(500, message);
    };

    static unauthorized(message) {
        return new ApiError(401, message);
    };

    static forbidden(message) {
        return new ApiError(403, message);
    };

    static notFound(message) {
        return new ApiError(404, message);
    };

    static alreadyExist(message) {
        return new ApiError(409, message);
    };
 
};

module.exports = ApiError;