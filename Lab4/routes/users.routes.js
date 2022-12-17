const { application } = require('express');
const Router = require('express');
const usersController = require('../controllers/users.controller');
const router = new Router();

router.post('/users', usersController.createUser);
router.get('/users', usersController.getUsers);
router.get('/users/check', usersController.getCorrectEmail);
router.get('/users/offset', usersController.offsetUser);
router.get('/users/:id', usersController.getOneUser);
router.put('/users', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;  