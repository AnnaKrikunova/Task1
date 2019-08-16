const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {ROLE_LIST, GENDER} = require('../util/constants');

const [USER] = ROLE_LIST;

const Schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: GENDER
    },
    role: {
        type: String,
        required: true,
        enum : ROLE_LIST,
        default: USER
    },
    password: {
        type: String,
        required: true
    }
});

Schema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, 8, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', Schema);

module.exports = User;
