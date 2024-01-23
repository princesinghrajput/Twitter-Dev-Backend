import mongoose from "mongoose";
//creating schema
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet Cannot be more than 250 characters"],
    },
    
  },
  { timestamps: true }
);

//creating model
const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
