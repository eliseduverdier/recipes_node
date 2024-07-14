const express = require('express');
const router = express.Router();

const deleteRecipeByLabel = require("../../models/recipes/deleteRecipeByLabel")
const parseCookies = require("../../util/parseCookies")
const isLogged = require("../../util/isLogged")

router.get('/:recipe/delete', function (req, res, next) {
    const cookies = parseCookies(req.headers.cookie);
    if (isLogged(cookies)) {
        deleteRecipeByLabel(req.params.recipe, (err) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }

            res.redirect('/recipes');
        });
    } else {
        res.redirect('/login')
    }
});
module.exports = router;
