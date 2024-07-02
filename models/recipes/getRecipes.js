const db = require("../../db-config")

const getRecipes = (callback) => {
    const sql = `SELECT * FROM recipes_recipes ORDER BY type, label;`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        callback(null, results.rows);
    });
};

module.exports = getRecipes;
