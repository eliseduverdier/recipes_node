const express = require('express');
const router = express.Router();

const getRecipeByLabel = require("../../models/recipes/getRecipeByLabel")
const getIngredientsByRecipeLabel = require("../../models/recipes/getIngredientsByRecipeLabel")

router.get('/:recipe', function (req, res, next) {
    getRecipeByLabel(req.params.recipe, (err, recipe) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }

        if (!recipe) {
            return res.status(404).json({error: 'Recipe not found'});
        }

        getIngredientsByRecipeLabel(req.params.recipe, (err, ingredientsResults) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }

            res.render('recipes/view', {
                recipe: recipe,
                ingredients: ingredientsResults
            });
        });
    });
});
module.exports = router;
