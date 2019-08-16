const yup = require('yup');
const {ROLE_LIST} = require('../util/constants');

const createSchema = yup.object().shape({
    fullName: yup
        .string()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .matches(/(^([a-z]|[0-9]|[A-Z]){8,}$)/)
        .required(),
    gender: yup
        .string()
        .required(),
    role: yup
        .string()
        .oneOf(ROLE_LIST)
        .required()
});

const updateSchema = yup.object().shape({
    fullName: yup
        .string(),
    gender: yup
        .string()
});

module.exports.createUser = createSchema;
module.exports.updateUser = updateSchema;