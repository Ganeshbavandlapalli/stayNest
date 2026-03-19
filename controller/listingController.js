const Listing=require("../models/listings")



module.exports.index=async(req,res)=>{
    const data=await Listing.find({})
        res.render("listings/index.ejs",{data})
    
    
}

module.exports.newList=async (req,res)=>{
    
    res.render("listings/new.ejs");
}

module.exports.showList=async (req,res)=>{
    let id=req.params.id
    let hotel=await Listing.findById(id).populate({
        path:"reviews",
        populate:{
            path:"authour"
        }
    }).populate("owner")
   
    if(!hotel){
        req.flash("notfound","the listing you are requested, doesn't exist")
        return res.redirect("/listings")
    }
    let currUser=req.user
    res.render("listings/show.ejs",{hotel,currUser})

}

module.exports.renderEditList=async (req,res)=>{
        let{id}=req.params
        let data=await Listing.findById(id)
        res.render("listings/edit.ejs",{data})
     }

module.exports.addList=async (req,res)=>{
    
    let list = new Listing(req.body.list);

    list.owner = req.user._id;
    list.image.filename= req.file.filename;
    list.image.url=req.file.path
    await list.save();
    req.flash("success","new listing added successfully");
    res.redirect("/listings");
}

//edit listing
module.exports.editList = async (req,res)=>{
    let {id} = req.params;
    let updatedData = req.body.list
    // find listing first
    let listing = await Listing.findById(id);
    // update text fields
    Object.assign(listing, updatedData);
    // ✅ if new image uploaded
    
        listing.image.filename = req.file.filename;
        listing.image.url=req.file.path
    
    await listing.save();
    req.flash("success","successfully edited the listing");
    res.redirect(`/listings/${id}`);
}


//delete route

module.exports.deleteList=async (req,res)=>{
    let{id}=req.params
    let deletedlist=await Listing.findByIdAndDelete(id);
    req.flash("deletemsg","deleted succesfully")
    res.redirect("/listings")

}
