import { HashtagRepository, TweetRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    console.log(data);
    const content = data.content;
    console.log("content is" + content)
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1).toLowerCase())

      try {
        const tweet = await this.tweetRepository.create(data);
        console.log('Tweet created:', tweet);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);

        let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);
    
        let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
    
        newTags = newTags.map((tag) => {
          return { title: tag, tweets: [tweet.id] };
        });
    
        await this.hashtagRepository.bulkCreate(newTags);
    
        alreadyPresentTags.forEach((tag) => {
          tag.tweets.push(tweet.id);
          tag.save();
        });
    
        return tweet;
        // Rest of your code...
    } catch (error) {
        console.error('Error creating tweet:', error);
        throw error;  // Rethrow the error for better debugging
    }

    
  }
}
export default TweetService;
