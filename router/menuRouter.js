const express = require('express')
const router = express.Router()
const MenuController = require ('../controller/MenuController.js')

router.get('/', MenuController.show)

router.get('/create', MenuController.create)
router.post('/store', MenuController.store)

router.get('/showcustomer/:id', MenuController.showCustomer)



module.exports = router

