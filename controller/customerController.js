class CustomerController{

    static create(req,res){
        // res.send('ini mau register')
        res.render('registerPage')
    }

    static store(req, res){
        console.log(req.body);
        let data = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            phone_number : req.body.phone_number
        }
        // res.send('ini mau save data register')
    }

}

module.exports = CustomerController