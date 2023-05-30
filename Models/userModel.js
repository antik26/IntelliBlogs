const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({    // Designing the user schema
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  blogs: [    // To establish blog and user relationship
    {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
    },
  ],
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;