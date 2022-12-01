const { application } = require('express');
const Router = require('express');
const deviceController = require('../controllers/device.controller');
const router = new Router();

router.post('/device', deviceController.createDevice);
router.get('/device', deviceController.getDevices);
router.get('/device/:id', deviceController.getOneDevice);
router.put('/device', deviceController.updateDevice);
router.delete('/device/:id', deviceController.deleteDevice);

module.exports = router;  