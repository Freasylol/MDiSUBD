const { application } = require('express');
const Router = require('express');
const cartDeviceController = require('../controllers/cartDevice.controller');
const router = new Router();

router.post('/cartDevice', cartDeviceController.createCartDevice);
router.get('/cartDevice', cartDeviceController.getCartDevices);
router.get('/cartDevice/:id', cartDeviceController.getOneCartDevice);
router.put('/cartDevice', cartDeviceController.updateCartDevice);
router.delete('/cartDevice/:id', cartDeviceController.deleteCartDevice);

module.exports = router;  