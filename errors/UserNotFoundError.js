const ApplicationError = require('./ApplicationError');

class UserNotFoundError extends ApplicationError {
    constructor(message) {
        super(message || 'User not found.', 404);
    }
}
module.exports = UserNotFoundError;