const express=require("express")
const router=express.Router()
const ExpressError=require("../utils/ExpressError.js")
const WrapAsync=require("../utils/WrapAsync.js")
const {validateListing,validateReview}=require("../validateSchema.js")
const Review=require("../models/reviews.js")
const joi=require("joi")
const Listing = require("../models/listings.js");
const{isLoggedin}=require("../middleware.js")
const ListingControllers=require("../controller/listingController.js")
const multer=require("multer")
const {storage}=require("../cloudconfig.js")
const upload=multer({storage})


router.route("/")
.get(ListingControllers.index)

router.route("/new")
.get(isLoggedin,ListingControllers.newList)

router.post(
  "/add",
  upload.single("image"),
  validateListing,
  WrapAsync(ListingControllers.addList)
);

router.route("/:id")
.get(WrapAsync(ListingControllers.showList))
.put(isLoggedin,upload.single("image"),validateListing,WrapAsync(ListingControllers.editList))
.delete(isLoggedin,WrapAsync(ListingControllers.deleteList))


router.route("/:id/edit")
.get(isLoggedin,WrapAsync(ListingControllers.renderEditList))




module.exports=router