import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully Created a new tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("error is" + error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong yaar',
            data: {},
            err: error
        });
    }
}
