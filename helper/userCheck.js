function userCheck(req){
    return req.session?.user ? true : false
}

module.exports = {userCheck}