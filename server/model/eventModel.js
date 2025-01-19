const { Schema, default: mongoose } = require("mongoose");
const eventSchema = new Schema(
  {
    image:{type:String,},
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    location:{type:String,required:true},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "userModel" }],
  },
  {
    timestamps: true,
  }
);

const eventModel = mongoose.model("Events", eventSchema);
module.exports = eventModel;
