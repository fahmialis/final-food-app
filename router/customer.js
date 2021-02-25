const express = require('express')
const router = express.Router()
const CustomerController = require ('../controller/customerController')
const {userLogged, testLogged }= require('../middleware/loginCheck')

router.get('/create', CustomerController.register)
router.post('/store', CustomerController.store)

router.get('/login', CustomerController.login)
router.post('/login', CustomerController.loggedIn)

router.use(userLogged)
router.get('/logout', CustomerController.logout)

router.get('/showMenu', CustomerController.showMenu)
router.post('/buy/:id', CustomerController.buyFood)



router.use(testLogged)
router.get('/list', CustomerController.showList)
router.get('/delete/:id', CustomerController.delete)
router.get('/foodBought/:id', CustomerController.foodHistory)



module.exports = router

