const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    let errors = []
    if(req.query.errors){
        errors = req.query.errors.split(',')
    }
    res.render('errorPage', {errors})
})




module.exports = router