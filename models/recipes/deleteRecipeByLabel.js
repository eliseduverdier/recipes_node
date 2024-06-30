const db = require("../../db-config")

const getRecipeByLabel = (label, callback) => {
    // 1. delete relations with ingredients
    const sqlRecipe = 'DELETE FROM recipes_recipe_has_ingredient WHERE recipe_id = (SELECT id from recipes_recipes WHERE label = $1)';
    db.query(sqlRecipe, [label], (err, results) => {
        if (err) throw err;

        // 2. delete recipe
        const sqlRhi = 'DELETE FROM recipes_recipes WHERE label = $1';
        db.query(sqlRhi, [label], (err, results) => {
            if (err) throw err;

        });
    });
};

module.exports = getRecipeByLabel;
