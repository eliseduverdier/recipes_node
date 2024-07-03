const db = require("../../db-config")

const getRecipeByLabel = (label, callback) => {
    // 1. delete relations with ingredients
    const sqlRhi = 'DELETE FROM recipes_recipe_has_ingredient WHERE recipe_id = (SELECT id from recipes_recipes WHERE label = $1)';
    db.query(sqlRhi, [label], (err, results) => {
        if (err) throw err;

        // 2. delete recipe
        const sqlRecipesqlRhi = 'DELETE FROM recipes_recipes WHERE label = $1';
        db.query(sqlRecipesqlRhi, [label], (err, results) => {
            if (err) throw err;
            callback(null, []);

        });
    });
};

module.exports = getRecipeByLabel;
