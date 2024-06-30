const db = require("../../db-config")

const getRecipesByIngredient = (label, callback) => {
    const sql = `SELECT r.label
                 FROM recipes_ingredients i
                          JOIN recipes_recipe_has_ingredient rhi ON i.id = rhi.ingredient_id
                          JOIN recipes_recipes r ON rhi.recipe_id = r.id
                 WHERE i.label = $1`;

    db.query(sql, [label], (err, results) => {
        if (err) throw err;
        callback(null, results.rows);
    });
}

module.exports = getRecipesByIngredient;
