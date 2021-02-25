const { Customer, Menu, CustomerMenu } = require('../models');
const customermenu = require('../models/customermenu');

class MenuController{

  static findAllMenu(req,res){
    Menu.findAll({
      include: Customer
    })
    .then(menu => {
      res.render('menu', {menu})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static getAddMenu(req,res){
    Menu.findAll({
      include: Customer
    })
    .then(menu => {
      res.render('buyFood', {menu})
    })
    .catch(err => {
      res.send(err)
    })
  }
  
  static getCustomerMenu(req,res){
    //jalanin edit
    //jalanin nambah ke customerMenu
    let id = req.params.id
    Menu.findByPk(id)
    //findbypk.
    //menu
    .then(data => {
      res.send(data)
      //customerMenu.findAll()
      //cutomerMenu.create(id)
      // stock = stock - 1
      // menu.save()
      res.render('buyFood', {data})
    })
    //.then(data => {})
    
    //res.render
    .catch(err => {
      res.send(err)
    })
  }

  static postBuyFood(req,res){
    // customerMenu.create(menuId, cusId)
  }

  static removeMenu(req,res){
    let id = req.params.id
    // Movie.destroy({
    //   where: {
    //     id:id
    //   }
    // })
    // .then(data => {
    //   res.redirect('/menu/add')
    // })
    // .catch(err => {
    //   res.send(err)
    // })
  }
}

module.exports = MenuController