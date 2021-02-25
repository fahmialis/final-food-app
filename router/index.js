const express = require('express')
const router = express.Router()

const CustomerRouter = require('./customer')
const MenuRouter = require('./menuRouter')

router.get('/', (req,res) =>{
    res.render('mainPage')
})
router.use('/customer', CustomerRouter)
router.use('/menu', MenuRouter)



module.exports = router