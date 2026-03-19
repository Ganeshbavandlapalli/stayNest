const User=require("../models/user.js")

module.exports.getSignup=(req,res)=>{
    res.render("users/signup.ejs")
}


module.exports.postSignup=async (req,res,next)=>{
    try{
    let{email,username,password}=req.body
    let newuser=new User({email,username})
    let registeredUser=await User.register(newuser,password)
     req.login(registeredUser,(err)=>{
        if(err){ return next(err); }

        req.flash("success","Welcome to Wanderlust!");
        res.redirect("/listings");
    });
    
    }
    catch(e){
        req.flash("error",e.message)
    
        res.redirect("/user/signup")
    }
}


module.exports.getLogin=(req,res)=>{
    res.render("users/login.ejs")
}



module.exports.postLogin= (req,res)=>{
    req.flash("success","welcome back mate!")
    let redirectUrl = res.locals.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    console.log("-----------2"+redirectUrl)
    res.redirect(redirectUrl);
}

module.exports.getLogout=(req,res,next)=>{
   req.logout(function(err){
      if(err){ return next(err); }

      req.flash("success","Logged out successfully");
      res.redirect("/listings");
   })
}