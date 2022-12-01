const { application } = require('express');
const Router = require('express');
const ordersController = require('../controllers/orders.controller');
const router = new Router();

router.post('/orders', ordersController.createOrder);
router.get('/orders', ordersController.getOrders);
router.get('/orders/:id', ordersController.getOneOrder);
router.put('/orders', ordersController.updateOrder);
router.delete('/orders/:id', ordersController.deleteOrder);

module.exports = router;  