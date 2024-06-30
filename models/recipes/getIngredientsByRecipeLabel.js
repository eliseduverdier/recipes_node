const db = require("../../db-config")

const getIngredientsByRecipeLabel = (label, callback) => {
    const sql = `
        SELECT i.label, rhi.quantity
        FROM recipes_ingredients i
                 JOIN recipes_recipe_has_ingredient rhi ON i.id = rhi.ingredient_id
                 JOIN recipes_recipes r ON rhi.recipe_id = r.id
        WHERE r.label = $1
    `;
    db.query(sql, [label], (err, results) => {
        if (err) throw err;
        callback(null, results.rows);
    });
};

module.exports = getIngredientsByRecipeLabel;
;
