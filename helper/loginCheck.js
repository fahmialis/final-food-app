const userLogged = (req, res, next) =>{
    // console.log(req.session);
    if(req.session.user){
        next()
    } else {
        res.send('You must login first')
    }
}


const testLogged = (req, res, next) =>{
    if(req.session.user && req.session.user.name == 'test'){
        next()
    } else {
        res.send('You are not allowed')
    }

}
module.exports = {userLogged, testLogged}