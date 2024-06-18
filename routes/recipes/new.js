const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
const createRecipe = require('../../models/recipes/createRecipe')

router.get('/create', (req, res) => {
    res.render('recipes/new', {});
});

module.exports = router;

router.post('/create', urlencodedParser, (req, res) => {
    createRecipe(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        return res.json(result);
    });
    return res.json(req.body);

    // res.redirect('/');
});
