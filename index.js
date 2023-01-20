const express = require('express')
const app = express()

app.use(require('./messages'))
app.use(express.json()) 

app.listen(4000, function () {
    console.log('server has been started')
})



