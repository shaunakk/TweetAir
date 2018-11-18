const express = require('express');
const router = express.Router();
const tweets = require("../controllers/tweets");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'TweetAir', tweets: tweets.getTweets() });
});

module.exports = router;
