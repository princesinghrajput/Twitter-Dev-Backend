const {tweetRepository} = require('../repository/index')

class TweetService {
    constructor(){
        this.tweetRepository
    }

    async create(data){
        const content = data.content;
        const tags= content.match(/#[a-zA-Z0-9_]+/g); //this regex extract hashtags
        tags=tags.map((tag) => tag.substring(1))
        console.log(tags);

        const tweet = await this.tweetRepository.create(data);
        //todo create  hashtag and more
        return tweet;
    }

}
module.exports =TweetService;