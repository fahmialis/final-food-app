const express = require('express')
const router = express.Router()

const CustomerRouter = require('./customer')



router.get('/', (req,res) =>{
    res.render('mainPage')
})
router.use('/customer', CustomerRouter)








module.exports = router