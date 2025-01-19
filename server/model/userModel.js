const { Schema, default: mongoose } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true],
      trim: true,
    },
    email: {
      type: String,
      required: [true],
      unique: [true],
      trim: true,
    },
    password: {
      type: String,
      required: [true],
      trim: true,
    },
 
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
