const { application } = require('express');
const Router = require('express');
const rateController = require('../controllers/rate.controller');
const router = new Router();

router.post('/rate', rateController.createRate);
router.get('/rate', rateController.getRates);
router.get('/rate/between', rateController.getGoodRates);
router.get('/rate/statement', rateController.ifStatement);
router.get('/rate/:id', rateController.getOneRate);
router.put('/rate', rateController.updateRate);
router.delete('/rate/:id', rateController.deleteRate);

module.exports = router;    