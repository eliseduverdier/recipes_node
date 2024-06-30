var express = require('express');
var router = express.Router();
const db = require('../../db-config'); // Adjust the path as needed

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM recipes_recipes;';

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        // res.json(results)
        res.render('recipes/list', {
            title: 'Recipes',
            recipes: results.rows
        });
    });
});

module.exports = router;
