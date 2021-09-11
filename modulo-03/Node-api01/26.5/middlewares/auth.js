


module.exports = (req, res, next) => {
    if(req.headers.authorization){
    
        return next();
    }

    next({status: 401, message: "No authorization header"});
}