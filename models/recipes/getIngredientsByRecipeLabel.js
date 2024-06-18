const db = require("../../db-config")

const getIngredientsByRecipeLabel = (label, callback) => {
    const sql = `
        SELECT i.label, rhi.quantity
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

module.exports = getIngredientsByRecipeLabel;
;
