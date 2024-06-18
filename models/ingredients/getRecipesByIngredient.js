const db = require("../../db-config")

const getRecipesByIngredient = (label, callback) => {
    const sql = `SELECT r.label
                 FROM ingredients i
                          JOIN recipe_has_ingredient rhi ON i.id = rhi.ingredient_id
                          JOIN recipes r ON rhi.recipe_id = r.id
                 WHERE i.label = '${label}'`;

    db.query(sql, [label], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
}

module.exports = getRecipesByIngredient;
