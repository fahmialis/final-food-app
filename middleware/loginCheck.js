const userLogged = (req, res, next) =>{
    // console.log(req.session);
    if(req.session.user){
        next()
    } else {
        res.render('loginFirst')
    }
}


const testLogged = (req, res, next) =>{
    if(req.session.user && req.session.user.name == 'test'){
        next()
    } else {
        res.render('notAllowed')
    }

}
module.exports = {userLogged, testLogged}