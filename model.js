const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      default:''
    },
    age: {
      type: Number,
      default: 0,
    },
  });
  
  const User = mongoose.model("User", UserSchema);
  console.log("User",User)
  module.exports = User;