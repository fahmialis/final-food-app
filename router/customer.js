const express = require('express')
const router = express.Router()
const CustomerController = require ('../controller/customerController')
const userLogged = require('../helper/loginCheck')





router.get('/create', CustomerController.register)
router.post('/store', CustomerController.store)

router.get('/login', CustomerController.login)
router.post('/login', CustomerController.loggedIn)

router.use(userLogged)

router.get('/', CustomerController.showList)
router.get('/delete/:id', CustomerController.delete)
router.get('/logout', CustomerController.logout)





module.exports = router

