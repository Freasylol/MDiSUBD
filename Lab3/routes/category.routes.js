const { application } = require('express');
const Router = require('express');
const categoryController = require('../controllers/category.controller');
const router = new Router();

router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.getCategories);
router.get('/category/:id', categoryController.getOneCategory);
router.put('/category', categoryController.updateCategory);
router.delete('/category/:id', categoryController.deleteCategory);

module.exports = router;  