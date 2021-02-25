const express = require('express')
const router = express.Router()
const CustomerController = require ('../controller/customerController')
const {userLogged, testLogged }= require('../helper/loginCheck')





router.get('/create', CustomerController.register)
router.post('/store', CustomerController.store)

router.get('/login', CustomerController.login)
router.post('/login', CustomerController.loggedIn)

router.use(userLogged)
router.get('/logout', CustomerController.logout)

router.use(testLogged)
router.get('/list', CustomerController.showList)
router.get('/delete/:id', CustomerController.delete)





module.exports = router

