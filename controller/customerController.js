const { comparePassword } = require('../helper/bycriptjs')
const {Customer} = require('../models')

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
        // res.send('ini mau register')
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
                res.redirect('/')
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
        console.log(req.body);
        Customer.findOne({
            where : {
                email : req.body.email
            }
        })
            .then(user =>{
                // req.session.id = user.id
                console.log(req.session);
                const correctPassword = comparePassword(req.body.password, user.password)

                if(user && correctPassword){
                    req.session.user = {
                        id : user.id,
                        name : user.first_name
                    }
                    console.log(req.session);
                    res.redirect('/')
                } else {
                    res.render('failedLogin')
                }
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
                res.redirect('/')
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
        })
    }



}

module.exports = CustomerController