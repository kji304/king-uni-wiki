var express = require('express');
var router = express.Router();
const Cube = require('../models/cube');

/* GET */
router.get('/set', function(req, res, next) {
    res.cookie("message", "new cookie");
    res.send("Cookie saved");
});

router.get('/read', function(req, res, next) {
    res.send(req.cookies);
});

module.exports = router;