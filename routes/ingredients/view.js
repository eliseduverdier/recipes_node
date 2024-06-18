var express = require('express');
var router = express.Router();
const db = require('../../db-config'); // Adjust the path as needed

const getRecipesByIngredient = require('../../models/ingredients/getRecipesByIngredient') // Adjust the path as needed

router.get('/:ingredient', function (req, res, next) {
    getRecipesByIngredient(req.params.ingredient, (err, recipesResult) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }

        // Render the template with data
        res.render('ingredients/view', {
            recipes: recipesResult,
            ingredient: req.params.ingredient
        });
    });
});

module.exports = router;
