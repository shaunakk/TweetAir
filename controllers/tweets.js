const Twit = require("twit");
const { promisify } = require("es6-promisify");
var twitterAPI = new Twit({
    consumer_key: 'iQugbu76pBPEeVUqOQjHUXJAu',
    consumer_secret: 'eIK68pub00TLLnGx6GqNL1SL1G89tNNK6FuH6lCCB4uylHq5pP',
    access_token: '3303757363-DtlpCHcO8ZWMt1iCIloh0PGRUHtAQoMYH3dEXkM',
    access_token_secret: 'wQXF36NtjAlJ51rlxG0OCft8M1nVTVuMiuAhDngllplUA',
})
let tweets = "";
let stream = twitterAPI.stream('statuses/filter', { track: '#tweetair' })
stream.on('tweet', function (tweet) {
    console.log(tweet);
    tweets += tweet;
})
exports.getTweets = async () => {
    const res = await twitterAPI.get('search/tweets', { q: '#tweetair', count: 5 });
    console.log(res.data);
    return res.data.statuses.map((value, index) => {
        return value.text;
    });
}
exports.getTweets.live() = () => {
    return tweets
}
