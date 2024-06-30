const db = require("../../db-config")

const getRecipeByLabel = (label, callback) => {
    const sql = `SELECT * FROM recipes_recipes WHERE label = $1 ;`;
    db.query(sql, [label], (err, results) => {
        if (err) throw err;
        callback(null, results.rows[0]);
    });
};

module.exports = getRecipeByLabel;
