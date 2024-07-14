var express = require('express');
var router = express.Router();
const db = require('../../db-config'); // Adjust the path as needed
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
const crypto = require('crypto');
const createCookie = require('../../util/createCookie')

router.get('/', function (req, res) {
    res.render('login/login');
});

router.post('/', urlencodedParser, (req, res, next) => {
    const {username, password} = req.body;
    if (process.env.USERNAME === username && process.env.PASSWORD === password) {
        createCookie(username, res);
        res.redirect('/recipes');

    } else {
        res.redirect('/login');
    }
});

module.exports = router;
