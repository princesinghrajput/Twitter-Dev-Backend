import {LikeRepository, TweetRepository } from "../repository/index";

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetsRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){
        if(modelType=='Tweet'){
            var likeable = await this.tweetsRepository.get(modelId)

        }
        else if(modelType=='Comment'){
            // TODO
        }
        else{

        }

    }
}

export default LikeService;