const userLogged = (req, res, next) =>{
    // console.log(req.session);
    if(req.session.user){
        next()
    } else {
        res.send('You must login first')
    }
}

module.exports = userLogged