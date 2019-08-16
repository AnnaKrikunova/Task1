const express = require('express');
const userController = require('../controller/usercontroller');
const validationMiddleware = require('../middlewares/validationMiddleWare');
const roleChecker = require('../middlewares/roleChecker');

const router = express.Router();

router.get('/user', userController.getAllUsers);

router.get('/user/:id', roleChecker, userController.getUserById);

router.post('/user', roleChecker.postUser, validationMiddleware.create, userController.createUser);

router.delete('/user/:id', roleChecker, userController.deleteUser);

router.put('/user/:id', roleChecker, validationMiddleware.update, userController.updateUser);

module.exports = router;
