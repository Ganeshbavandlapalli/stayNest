

module.exports.isLoggedin=(req,res,next)=>{
    
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl
        console.log("-------1"+req.session.redirectUrl)
        req.flash("error","you must be logged in,to perform this action")
        return res.redirect("/user/login")
    }
    next()
}


module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl
    console.log("save  :"+res.locals.redirectUrl)
    }
    next()
}