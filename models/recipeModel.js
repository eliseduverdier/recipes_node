const db = require("../db-config")

const getRecipeByLabel = (label, callback) => {
    const sql = 'SELECT * FROM recipes WHERE label = ?';
    db.query(sql, [label], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

const getIngredientsByRecipeLabel = (label, callback) => {
    const sql = `
        SELECT i.label
        FROM ingredients i
                 JOIN recipe_has_ingredient rhi ON i.id = rhi.ingredient_id
                 JOIN recipes r ON rhi.recipe_id = r.id
        WHERE r.label = ?
    `;
    db.query(sql, [label], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getRecipeByLabel,
    getIngredientsByRecipeLabel
};

/*
const db = require("../db-config")

function getRecipe(recipeLabel) {
    const sqlRecipe = `SELECT *
                       FROM recipes
                       WHERE label = '${recipeLabel}'`;

    db.query(sqlRecipe, (err, recipeResults) => {
        if (err) {
            throw err;
        }
        const recipe = recipeResults[0];

        const sqlIngredients = `
            SELECT i.label, rhi.quantity
            FROM ingredients i
                     JOIN recipe_has_ingredient rhi ON i.id = rhi.ingredient_id
                     JOIN recipes r ON rhi.recipe_id = r.id
            WHERE r.label = '${recipe.label}';
        `;
        db.query(sqlIngredients, (err, ingredientsResults) => {
            if (err) {
                throw err;
            }

            return {
                recipe: recipe, ingredients: ingredientsResults
            };
        });
    });

    return {}
}

module.exports = getRecipe
*/
