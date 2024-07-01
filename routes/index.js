var express = require('express');
var router = express.Router();
const db = require('../db-config'); // Adjust the path as needed

router.get('/', function (req, res, next) {
    res.redirect('/recipes',);
});

module.exports = router;
