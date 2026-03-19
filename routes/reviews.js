const express=require("express")
const router = express.Router({ mergeParams: true });
const ExpressError=require("../utils/ExpressError.js")
const WrapAsync=require("../utils/WrapAsync.js")
const {validateListing,validateReview}=require("../validateSchema.js")
const Review=require("../models/reviews.js")
const joi=require("joi")
const Listing = require("../models/listings.js");
const {isLoggedin}=require("../middleware.js")

const reviewController=require("../controller/reviewController.js")


router.post("/",isLoggedin,validateReview,reviewController.addReview)
//delete route for deleting the review
router.delete("/:reviewId",isLoggedin,WrapAsync(reviewController.deleteReview))

module.exports=router