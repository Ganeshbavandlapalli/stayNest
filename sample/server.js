const express=require("express")
const session=require("express-session")
const app=express()
const flash=require("connect-flash")
app.set("view engine", "ejs");

app.use(session({
    secret:"ganesh",
    resave:false,
    saveUninitialized:true
}))

app.use(flash())


app.get("/",(req,res)=>{
    let {name="ananoumous"}=req.query
    req.session.name=name
    req.flash("success",`${name}, you are registered successfully`)
    res.send(req.session.name)
})

app.get("/hello",(req,res)=>{

    res.render("view",{msg:req.flash("success"),name:req.session.name})
})

app.listen(3001,()=>{
    console.log("hello")
})