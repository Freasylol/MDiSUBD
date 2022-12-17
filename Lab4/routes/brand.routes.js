const { application } = require('express');
const Router = require('express');
const brandController = require('../controllers/brand.controller');
const router = new Router();

router.post('/brand', brandController.createBrand);
router.get('/brand', brandController.getBrands);
router.get('/brand/inner', brandController.innerJoinDevice);
router.get('/brand/left', brandController.leftJoinDevice);
router.get('/brand/right', brandController.rightJoinDevice);
router.get('/brand/cross', brandController.crossJoinDevice);
router.get('/brand/full', brandController.fullJoinDevice);
// router.get('/brand/self', brandController.selfJoinDevice);
router.get('/brand/count', brandController.countDevice);
router.get('/brand/union', brandController.unionDevice);
router.get('/brand/case', brandController.caseDevice);
router.get('/brand/explain', brandController.explainDevice);
router.get('/brand/exist', brandController.existDevice);
router.get('/brand/:id', brandController.getOneBrand);
router.put('/brand', brandController.updateBrand);
router.delete('/brand/:id', brandController.deleteBrand);

module.exports = router;  