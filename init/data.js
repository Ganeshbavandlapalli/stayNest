const mongoose = require("mongoose");

const data = [
  {
    _id: new mongoose.Types.ObjectId("69bbbc5ba18abad621d0a216"),
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "wanderlust_DEV/dce6zpjzv9i05w2r0jhc",
      url: "https://res.cloudinary.com/dzf0gfprt/image/upload/v1773911128/wanderlust_DEV/dce6zpjzv9i05w2r0jhc.jpg"
    },
    price: 5000,
    location: "Fiji",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("69b6b8b3082ba5e40151a003")
  },
  {
    _id: new mongoose.Types.ObjectId("69bbbc8aa18abad621d0a21e"),
    title: "hotel madrid",
    description: "a five star luxury hotel",
    image: {
      filename: "wanderlust_DEV/v0x23siusqemlycvkvmw",
      url: "https://res.cloudinary.com/dzf0gfprt/image/upload/v1773911176/wanderlust_DEV/v0x23siusqemlycvkvmw.jpg"
    },
    price: 8120,
    location: "Malibu",
    country: "Spain",
    reviews: [],
    owner: new mongoose.Types.ObjectId("69b6b8b3082ba5e40151a003")
  },
  {
    _id: new mongoose.Types.ObjectId("69bbbcbda18abad621d0a226"),
    title: "hotel barca",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "wanderlust_DEV/iezuz28tnkw7q2xgzalo",
      url: "https://res.cloudinary.com/dzf0gfprt/image/upload/v1773911227/wanderlust_DEV/iezuz28tnkw7q2xgzalo.jpg"
    },
    price: 5400,
    location: "Barceelona",
    country: "Spain",
    reviews: [],
    owner: new mongoose.Types.ObjectId("69b6b8b3082ba5e40151a003")
  },
  {
    _id: new mongoose.Types.ObjectId("69bbbda2a18abad621d0a23e"),
    title: "falaknama",
    description: "a dubai based 5 star hotel",
    image: {
      filename: "wanderlust_DEV/xp5icjyompzgqzi0aoji",
      url: "https://res.cloudinary.com/dzf0gfprt/image/upload/v1773911456/wanderlust_DEV/xp5icjyompzgqzi0aoji.jpg"
    },
    price: 9210,
    location: "Dubai",
    country: "UAE",
    reviews: [],
    owner: new mongoose.Types.ObjectId("69b6b8b3082ba5e40151a003")
  },
  {
    _id: new mongoose.Types.ObjectId("69bbbe0aa18abad621d0a246"),
    title: "The palace Malibu",
    description: "A hotel inside the curved modern.",
    image: {
      filename: "wanderlust_DEV/kib1showwyp9wou4vpgn",
      url: "https://res.cloudinary.com/dzf0gfprt/image/upload/v1773911560/wanderlust_DEV/kib1showwyp9wou4vpgn.jpg"
    },
    price: 8450,
    location: "Dortmund",
    country: "Germany",
    reviews: [],
    owner: new mongoose.Types.ObjectId("69b6b8b3082ba5e40151a003")
  },
  {
    _id: new mongoose.Types.ObjectId("69bbc071a18abad621d0a24e"),
    title: "Taiwan hotel",
    description: "a chinese traditional hotel",
    image: {
      filename: "wanderlust_DEV/b7z0zj7rqx4mczchff12",
      url: "https://res.cloudinary.com/dzf0gfprt/image/upload/v1773912175/wanderlust_DEV/b7z0zj7rqx4mczchff12.jpg"
    },
    price: 50000,
    location: "Taiwan",
    country: "China",
    reviews: [],
    owner: new mongoose.Types.ObjectId("69b6b8b3082ba5e40151a003")
  }
];



module.exports =data;
