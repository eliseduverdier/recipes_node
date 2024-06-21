const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
const createRecipe = require('../../models/recipes/createRecipe')
const getTypes = require('../../models/types/getTypes')

router.get('/create', (req, res) => {
    getTypes((err, result) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.render('recipes/new', {types: result});
    });
});

module.exports = router;

router.post('/create', urlencodedParser, (req, res) => {
    createRecipe(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
    });
    res.redirect('/recipes/');
});
