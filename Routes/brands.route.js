const {Router} = require('express')
const { productsController } = require('./controllers')

const router = Router()

router.get('/brands', productsController.getBrands)
router.post('/brands', productsController.addBrands )
router.delete('/brands', productsController.deleteBrands)

module.exports = router