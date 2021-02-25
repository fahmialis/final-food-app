const express = require('express')
const router = express.Router()
const CustomerController = require ('../controller/customerController')



router.get('/create', CustomerController.create)
router.post('/store', CustomerController.store)

module.exports = router

