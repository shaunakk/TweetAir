const express = require('express');
const router = express.Router();
const tweets = require("../controllers/tweets");
router.get('refreshTweets', function (req, res, next) {
  res.json({ tweets: tweets.live() });
});

module.exports = router;
