const express = require('express')
const router = express.Router()

const CustomerRouter = require('./customer')
const MenuRouter = require('./menuRouter')
const errorRouter = require('./error.js')

router.get('/', (req,res) =>{
    res.render('mainPage')
})

router.use('/error', errorRouter)
router.use('/customer', CustomerRouter)
router.use('/menu', MenuRouter)


module.exports = router