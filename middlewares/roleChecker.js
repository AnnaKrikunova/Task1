const User = require("../model/user.models");
const {ROLE_LIST} = require('../util/constants');
const [USER, ADMIN] = ROLE_LIST;

module.exports = (req, res, next) => {
    User.findById(req.headers.uid)
        .then(user => {
            const admin = user.role === ADMIN;
            const sameUser = req.headers.uid === req.params.id;

            if(admin && !sameUser) {
                next();
            } else if (!admin && sameUser) {
                next();
            } else {
                next(new Error("You don`t have rights!"))
            }
        })
        .catch(err => next(err))
};

module.exports.postUser = (req, res, next) => {
    User.findById(req.headers.uid)
        .then(user => {
            const admin = user.role === ADMIN;
            const createUser = req.body.role === USER;

            if(admin && createUser){
                next();
            } else if (!admin && createUser) {
                next();
            } else {
                next(new Error("You don`t have rights!"))
            }
        })
        .catch(err => next(err))
};

module.exports.admin = (req, res, next) => {
    User.findById(req.headers.uid)
        .then(user => {
            const admin = user.role === ADMIN;

            if(admin){
                next();
            } else {
                next(new Error("You don`t have rights!"))
            }
        })
        .catch(err => next(err))
};