import mongoose from "mongoose";

const liekSchema = mongoose.Schema({
    onModel:{
        type: String,
        required:true,
        ref: "Tweet"
    }
})