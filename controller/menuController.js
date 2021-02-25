const { Customer, Menu,} = require('../models');

class MenuController{
  static show(req,res){
    Menu.findAll({
      order : [['id', 'ASC']]
    })
      .then(data =>{
        // res.send(data)
        res.render('menu', {data})
      })


  }
  static create(req,res){
    res.render('addNewMenu')
  }

  static store(req,res){
    // console.log(req.body)
    let data = {
      name : req.body.name,
      stock : +req.body.stock,
      harga : +req.body.harga,
  }
      Menu.create(data)
      .then(data =>{
          res.redirect('/menu')
      })
      .catch(err =>{
          console.log(err);
      })
  }

  static showCustomer(req, res){
    let id = +req.params.id

    Menu.findByPk(id, {
        include : Customer
    })
        .then(data =>{
            // console.log(data);
            // res.send(data)
            res.render('showCustomerBought', {data})
        })
        .catch(err =>{
            res.send(err)
        })

  }
}


module.exports = MenuController