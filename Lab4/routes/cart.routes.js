const { application } = require('express');
const Router = require('express');
const cartController = require('../controllers/cart.controller');
const router = new Router();

router.post('/cart', cartController.createCart);
router.get('/cart', cartController.getCarts);
router.get('/cart/:id', cartController.getOneCart);
router.put('/cart', cartController.updateCart);
router.delete('/cart/:id', cartController.deleteCart);

module.exports = router;  