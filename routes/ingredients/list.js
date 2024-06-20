var express = require('express');
var router = express.Router();
const db = require('../../db-config'); // Adjust the path as needed

router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM recipes_ingredients';

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.render('ingredients/list', {
            title: 'Recipes',
            ingredients: results
        });
    });
});

module.exports = router;
