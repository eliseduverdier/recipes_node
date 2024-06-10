const express = require('express');
const router = express.Router();
const { getRecipeByLabel, getIngredientsByRecipeLabel } = require('../models/recipes/recipeModel'); // Adjust the path as needed

router.get('/new', function(req, res) {

});

// ---------------
// GET A RECIPE
// ---------------
router.get('/:recipe', function (req, res, next) {
    getRecipeByLabel(req.params.recipe, (err, recipe) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        getIngredientsByRecipeLabel(req.params.recipe, (err, ingredientsResults) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Render the template with data
            res.render('recipe', {
                recipe: recipe,
                ingredients: ingredientsResults
            });
        });
    });
});

module.exports = router;
