const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    //product:{
    // type:mongoose.Schema.Types.ObjectId,
    // ref:"Product",
    //required:true
    //},
    image: {
      type: [String],
      required: true,
    },

    front: {
      type: String,
      required: true,
    },
    back: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
