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
        let errors = []
        for ( let i = 0; i < err.errors.length; i++){
            errors.push(err.errors[i].message)
        }
        res.redirect(`/error?errors=${errors}`)
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


    static edit(req,res){

      let id = +req.params.id

      Menu.findByPk(id)
          .then(data =>{
            // res.send(data)
              res.render('menuEdit', {data})
          })
          .catch(err =>{
              console.log(err);
          })
  }


    static update(req,res){
    let id = +req.params.id
    console.log(req.body);
    
    let data = {
        name : req.body.name,
        stock : +req.body.stock,
        harga : +req.body.harga,
    }

    console.log(data);

    Menu.update(data,{
        where : {id}
    }) 
        .then(data =>{
            res.redirect('/menu')
        })
        .catch(err =>{
          // res.send(err)
            let errors = []
            for ( let i = 0; i < err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            res.redirect(`/error?errors=${errors}`)
        })

}
}


module.exports = MenuController