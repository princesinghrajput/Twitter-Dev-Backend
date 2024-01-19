const express = require('express');
const connect = require('./config/database');
const app = express();

// const Tweet=require("./models/tweet");

const TweetRepository = require('./repository/tweet-repository');
const Comment=require('./models/comment');

app.listen(3000, async() =>{
    console.log('Server is running on port 3000');
    await connect();
    console.log("Mongo db connected")
    // const tweet= await Tweet.create({
    //     content: 'Third Tweet',
    //     userEmail: 'psr8084@gmail.com',
    // } 
    
    // );

    // const tweets=await Tweet.find({});

    // const tweet= await Tweet.findById('65aa0e5f1acbdef1a11f5617')
    // tweet.userEmail = 'hello@gmail.com';
    // tweet.save();


    const  tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content:"Tweet with comment schema"});
    // console.log(tweet);
    // const comment= await Comment.create({content:"New comment finally added"});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);


    const tweet= await tweetRepo.getWithComments('65aa407b0f0abeb0acbba680');
    console.log(tweet);
});