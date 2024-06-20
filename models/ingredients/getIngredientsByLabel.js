const db = require("../../db-config")

const getIngredientsByLabel = (label, callback) => {
    const sql = 'SELECT * FROM recipes_ingredients';
    db.query(sql, [], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

module.exports = getIngredientsByLabel;
