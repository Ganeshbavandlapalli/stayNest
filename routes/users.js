const express=require("express")
const router = express.Router({ mergeParams: true });
const User=require("../models/user")
const passport=require("passport")
const{saveRedirectUrl}=require("../middleware.js")
const userController=require("../controller/userController.js")


router.route("/signup")
.get(userController.getSignup)
.post(userController.postSignup)

router.route("/login")
.get(userController.getLogin)
.post(saveRedirectUrl,passport.authenticate("local",{ failureRedirect: "/user/login",failureFlash: true}), userController.postLogin)

router.route("/logout")
.get(userController.getLogout)

module.exports=router
