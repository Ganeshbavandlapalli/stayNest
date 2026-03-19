const Listing = require("../models/listings.js");
const Review=require("../models/reviews.js")

module.exports.addReview=async (req,res)=>{
    
    let  revdoc=new Review(req.body.review)
    revdoc.authour=req.user._id
    let list= await Listing.findById(req.params.id)
    list.reviews.push(revdoc)
    await revdoc.save()
    await list.save()
    console.log("the comment is:",req.body.review.comment)
    req.flash("reviewA","review added successfully")
    res.redirect(`/listings/${req.params.id}`)
}


module.exports.deleteReview=async (req,res)=>{
    let{id,reviewId}=req.params
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)
    req.flash("reviewD","review deleted successfully")
    res.redirect(`/listings/${id}`)
}