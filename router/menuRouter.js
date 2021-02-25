const express = require('express')
const router = express.Router()
const MenuController = require ('../controller/menuController')



router.get('/create', menuController)
router.post('/store', menuController)

module.exports = router

