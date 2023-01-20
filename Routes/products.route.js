const {Router} = require('express')
const { productsController } = require('./controllers')

const router = Router()


router.get('/', productsController.getProducts)
router.get('/products/:id', productsController.addProducts)
router.post('/products', productsController.addProducts)
router.delete('/products/:id', productsController.deleteProductsById)

module.exports = router