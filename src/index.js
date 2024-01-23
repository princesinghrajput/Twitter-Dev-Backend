const express = require('express');
const connect = require('./config/database');
const app = express();

// const Tweet=require("./models/tweet");

// const TweetRepository = require('./repository/tweet-repository');
// const Comment=require('./models/comment');

const {TweetRepository} = require('./repository/index');
const TweetService= require('./services/tweet-service')

app.listen(3000, async() =>{
    console.log('Server is running on port 3000');
    await connect();
    console.log("Mongo db connected")

    let service = new TweetService();
    // const tweet= service.create({content:"This is after #Processing really #excited and its going to be #fun. My Name is #Prince"})
    const tweet=service.create({content: 'Happy #Diwali to everyone. #Ram . Have #fun in #Diwali have #fun'})
    console.log(tweet)
//  let repo = new HashtagRepository();
//  let response = await repo.findByName(['Trend', 'Excited'])
//  console.log(response)

//  response = response.map(tags=>tags.title)
//  console.log(response)

})