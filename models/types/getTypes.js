const db = require("../../db-config")

const getTypes = (callback) => {
    const sql = 'SELECT distinct(type) FROM recipes_recipes;';
    db.query(sql, [], (err, results) => {
        if (err) throw err;
        callback(null, results.map((r) => r.type));
    });
};

module.exports = getTypes;
