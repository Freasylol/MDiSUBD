const { application } = require('express');
const Router = require('express');
const deviceInfoController = require('../controllers/deviceInfo.controller');
const router = new Router();

router.post('/deviceInfo', deviceInfoController.createDeviceInfo);
router.get('/deviceInfo', deviceInfoController.getDeviceInfos);
router.get('/deviceInfo/:id', deviceInfoController.getOneDeviceInfo);
router.put('/deviceInfo', deviceInfoController.updateDeviceInfo);
router.delete('/deviceInfo/:id', deviceInfoController.deleteDeviceInfo);

module.exports = router;  