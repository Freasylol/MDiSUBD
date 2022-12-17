const { application } = require('express');
const Router = require('express');
const logController = require('../controllers/log.controller');
const router = new Router();

router.post('/log', logController.createLog);
router.get('/log', logController.getLogs);
router.get('/log/:id', logController.getOneLog);
router.put('/log', logController.updateLog);
router.delete('/log/:id', logController.deleteLog);

module.exports = router;  