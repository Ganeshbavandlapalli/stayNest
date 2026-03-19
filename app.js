require("dotenv").config();
console.log(process.env.CLOUD_NAME)

const express=require("express")
const app=express();
app.set("view engine","ejs")
app.set(__dirname,"views")
app.use(express.urlencoded({extended:true}))
const session=require("express-session")
const Listing = require("./models/listings.js");
const flash=require("connect-flash")
const method_override=require("method-override")
app.use(method_override("_method"))
const path=require("path")
const ExpressError=require("./utils/ExpressError.js")
const WrapAsync=require("./utils/WrapAsync.js")
const validate=require("./validateSchema.js")
const mongoose=require("mongoose");
//auth reqs
const passport=require("passport")
const pls=require("passport-local")
const User=require("./models/user.js")

url="mongodb+srv://ganesh:6302630859@cluster0.vkjlg5u.mongodb.net/wanderlust";
const connectDB=async()=>{
    try{
        await mongoose.connect(url)
        console.log("mongodb connected successfully")
    }
    catch(error){
        console.log("error occured:",error)
        process.exit(1)
    }

}

connectDB()
const MongoStore=require("connect-mongo").default
const store=MongoStore.create({
    mongoUrl:"mongodb+srv://ganesh:6302630859@cluster0.vkjlg5u.mongodb.net/wanderlust",
    crypto:{
        secret:"Ganesh"
    },
    touchAfter:24*3600
    
})

const sessionOptions={
    store,
    secret:"Ganesh",
    resave:false,
    saveUninitialized:true
}

app.use(express.static(path.join(__dirname,"public")))
app.use(session(sessionOptions))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new pls(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())







const joi=require("joi")
app.use(express.static(path.join(__dirname,"public")))
//ejs
const engine = require("ejs-mate");
app.engine("ejs", engine);
app.set("view engine", "ejs");

const listings=require("./routes/listings.js")
const reviews=require("./routes/reviews.js")
const users=require("./routes/users.js")





app.listen(3002,()=>{
    console.log("hello")
})

app.use((req,res,next)=>{
    console.log(req.path)
    next();
})

app.use((req,res,next)=>{
     res.locals.currentUser = req.user;
    res.locals.messages=req.flash()
    next()
})

app.get("/",(req,res)=>{
     res.send("hello the server is running")
})



app.use("/listings",listings)
app.use("/listings/:id/review",reviews)
app.use("/user",users)


app.use((req,res,next)=>{
    next(new ExpressError("PageNotfound",404))
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).render("error/error.ejs", {
    statusCode,
    message
  });
});


