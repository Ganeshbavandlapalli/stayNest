const mongoose = require("mongoose");
const ListingModel = require("../models/listings.js");
const ListingData = require("./data.js");

const url = "mongodb+srv://ganesh:6302630859@cluster0.vkjlg5u.mongodb.net/wanderlust";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected successfully");
  } catch (error) {
    console.log("an error occurred", error);
  }
};

connectDB();

const init = async () => {
 const userId = new mongoose.Types.ObjectId("69bbd91976d1b8436ec19ffe");

  await ListingModel.updateMany({}, { $set: { owner: userId } });

  console.log("Owner updated successfully");
  console.log("data insertion success");
};

init();