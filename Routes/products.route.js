const {Router} = require('express')
const { productsController } = require('./controllers')

const router = Router()

router.get('/', productsController.getProducts)
router.get('/products/:id', productsController.getProducts)
router.post('/products', productsController.addProducts)
router.delete('/products/:id', productsController.deleteProductsById)

module.exports = router