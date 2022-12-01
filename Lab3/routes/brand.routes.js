const { application } = require('express');
const Router = require('express');
const brandController = require('../controllers/brand.controller');
const router = new Router();

router.post('/brand', brandController.createBrand);
router.get('/brand', brandController.getBrands);
router.get('/brand/:id', brandController.getOneBrand);
router.put('/brand', brandController.updateBrand);
router.delete('/brand/:id', brandController.deleteBrand);

module.exports = router;  