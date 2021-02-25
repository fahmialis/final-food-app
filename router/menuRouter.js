const express = require('express')
const router = express.Router()
const MenuController = require ('../controller/MenuController.js')

router.get('/', MenuController.findAllMenu)
router.get('/add', MenuController.getAddMenu)
// router.post('/add', MenuController.postAddMenu)

router.get('/buyfood/:id', MenuController.getCustomerMenu) // get customer menu
router.post('/buyfood/:id', MenuController.postBuyFood) // ngedit / ngurangin stock menu. add ke customermenu

router.delete('/delete/:id', MenuController.removeMenu)

module.exports = router

