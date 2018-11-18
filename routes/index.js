const express = require('express');
const router = express.Router();
const tweets = require("../controllers/tweets");
/* GET home page. */
router.get('/', async function (req, res, next) {
  const tweetsList = await tweets.getTweets();
  res.render('index', { title: 'TweetAir', tweets: JSON.stringify(tweetsList) });
});


module.exports = router;
