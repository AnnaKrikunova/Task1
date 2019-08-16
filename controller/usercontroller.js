const User = require('../model/user.models');

module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => next(err));
};

module.exports.getUserById = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            if(!user) return next(new Error("User not found"));
            res.send(user);
        })
        .catch(err => next(err));
};
module.exports.createUser = (req, res, next) => {
    const user = new User(req.body);
    user.save()
        .then(savedUser => {
            res.send(savedUser);
        })
        .catch(err => {
            next(err);
        })
};
module.exports.updateUser = (req, res, next) => {
    const {email, password, role, ...other} = req.body;
    User.findByIdAndUpdate(req.params.id, other, {new: true, runValidators: true})
        .then(user => {
            res.send(user);
        })
        .catch(err => next(err))
};
module.exports.deleteUser = (req, res, next) => {
    const uid = req.params.id;
    User.deleteOne({_id: uid})
        .then(({deletedCount}) => {
            if(deletedCount === 0) {
                return next(new Error("User not found"));
            }
            res.send({_id: uid});
        })
        .catch(err => next(err))
};