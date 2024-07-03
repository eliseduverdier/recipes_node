var express = require('express');
var router = express.Router();
const db = require('../../db-config');
const getRecipes = require("../../models/recipes/getRecipes");

router.get('/', (req, res) => {
    getRecipes((err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.render('recipes/list', {
            title: 'Recipes',
            recipes: results
        });
    });
});

module.exports = router;
