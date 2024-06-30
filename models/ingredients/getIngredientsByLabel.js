const db = require("../../db-config")

const getIngredientsByLabel = (callback) => {
    const sql = 'SELECT * FROM recipes_ingredients';
    db.query(sql, [], (err, results) => {
        if (err) throw err;
        callback(null, results.rows[0]);
    });
};

module.exports = getIngredientsByLabel;
