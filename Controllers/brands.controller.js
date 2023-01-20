module.exports.productsController = {
    
   getBrands: (req, res) => {
        res.json('all brands')
    },

    addBrands: (req, res) => {
        res.status(201).json(req.body)
    },

    deleteBrands: (req, res) => {
        res.json('brand deleted')
    }
}
