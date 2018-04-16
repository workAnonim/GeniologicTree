var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id:1,
    username: "sampl1"
  },
  {
    id:2,
    username: "sampl2"
  }]);
});

module.exports = router;
