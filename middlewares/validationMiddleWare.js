const schema = require('../middlewares/yupValidationMiddleWare');

module.exports.create = async (req, res, next) => {
    try {
        await schema.createUser.validate(req.body);
        next();
    } catch (err) {
        next(err);
    }
};
module.exports.update = async (req, res, next) => {
    try{
        await schema.updateUser.validate(req.body);
        next();
    } catch (err) {
        next(err);
    }
};
