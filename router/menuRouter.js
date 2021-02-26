const express = require('express')
const router = express.Router()
const MenuController = require ('../controller/MenuController.js')
const {testLogged} = require('../middleware/loginCheck')


router.use(testLogged)
router.get('/', MenuController.show)

router.get('/create', MenuController.create)
router.post('/store', MenuController.store)

router.get('/edit/:id', MenuController.edit)
router.post('/edit/:id', MenuController.update)

router.get('/showcustomer/:id', MenuController.showCustomer)



module.exports = router

