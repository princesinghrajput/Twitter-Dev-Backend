const mongoose = require('mongoose');

//creating schema
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        
    }
    ]
   
},
{timestamps: true});

//creating model
const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;

