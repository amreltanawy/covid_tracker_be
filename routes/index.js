var express = require('express');
var router = express.Router();
var {
    findAllTempratureController,
    createTempratureController
    } = require("../controllers/tempratureDataController");


/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/entries',findAllTempratureController)
router.post("/entries",createTempratureController)

module.exports = router;
