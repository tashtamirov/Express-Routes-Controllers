module.exports.productsController = {
    
    getProducts: (req, res) => {
        res.json('all products')
    },

    getProductsById: (req, res) => {
        console.log(req.params)
        res.json(`products by id - ${req.params.id}`)
    },

    addProducts: (req, res) => {
        res.status(201).json(req.body)
    },

    deleteProductsById: (req, res) => {
        res.json('product deleted')
    },

}