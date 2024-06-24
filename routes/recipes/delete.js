const express = require('express');
const router = express.Router();

const deleteRecipeByLabel = require("../../models/recipes/deleteRecipeByLabel")

router.get('/:recipe/delete', function (req, res, next) {
    deleteRecipeByLabel(req.params.recipe, (err, recipe) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }

        res.redirect('/recipes');
    });
});
module.exports = router;
