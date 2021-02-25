const { comparePassword } = require('../helper/bycriptjs')
const {Customer, Menu, CustomerMenu} = require('../models')

class CustomerController{

    static showList(req, res){
        Customer.findAll()
            .then(data =>{
                // console.log(data);
                res.render('customerList', {data})
            })
            .catch(err =>{
                let errors = []
                for ( let i = 0; i < err.errors.length; i++){
                    errors.push(err.errors[i].message)
                }
                res.redirect(`/error?errors=${errors}`)
            })
    }

    static register(req,res){
        res.render('registerPage')
    }

    static store(req, res){
        // console.log(req.body);
        let data = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            password : req.body.password,
            phone_number : +req.body.phone_number
        }
        // console.log(data);

        Customer.create(data)
            .then(data =>{
                // res.redirect('/')
                res.render('mainPage')
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

    static login(req, res){
        res.render('loginPage')
    }

    static loggedIn(req, res){
        // console.log(req.body);
        Customer.findOne({
            where : {
                email : req.body.email
            }
        })
            .then(user =>{
                // console.log(req.session);
                const correctPassword = comparePassword(req.body.password, user.password)

                if(user && correctPassword){
                    req.session.user = {
                        id : user.id,
                        name : user.first_name
                    }
                    // console.log(req.session);
                    res.redirect('/')
                } else {
                    res.render('failedLogin')
                }
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static showMenu(req, res){
        // console.log(req.session.user.id, req.session.user.name );
        let customerData = {
            id : req.session.user.id,
            name : req.session.user.name
        }
        Menu.findAll()
            .then(data =>{
            // res.send(data)
            let menuList = data
            // console.log(menuList, 'menu list');
            res.render('menuList', {menuList, customerData})
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static buyFood(req, res){
        // console.log(req.body);
        let userId = +req.params.id
        let data = {
            CustomerId : +userId,
            MenuId : +req.body.MenuId
        }
        // console.log(data);

        CustomerMenu.create(data)
            .then(data =>{
                res.redirect('/')
            })
            .catch(err =>{
                // console.log(err);
                res.send(err)
            })
    }

    static delete (req, res){
        let id = +req.params.id
        Customer.destroy({
            where : {
                id : id
            }
        })
            .then(data =>{
                res.redirect('/customer/list')
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static logout (req, res){
        req.session.destroy(err =>{
            if(err){
                res.send(err)
            }
            res.redirect('/')
        })
    }

    static foodHistory(req,res){
        let id = +req.params.id

        Customer.findByPk(id, {
        include : Menu
        })
        .then(data =>{
            // res.send(data)
            res.render('foodHistory', {data})
        })
        .catch(err =>{
            res.send(err)
        })

    }
}

module.exports = CustomerController