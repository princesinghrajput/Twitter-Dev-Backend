const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet=require("./models/tweet");

const TweetRepository = require('./repository/tweet-repository');
const Comment=require('./models/comment');

app.listen(3000, async() =>{
    console.log('Server is running on port 3000');
    await connect();
    console.log("Mongo db connected")

    
});