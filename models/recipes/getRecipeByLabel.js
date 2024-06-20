const db = require("../../db-config")

const getRecipeByLabel = (label, callback) => {
    const sql = 'SELECT * FROM recipes_recipes WHERE label = ?';
    db.query(sql, [label], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

module.exports = getRecipeByLabel;
