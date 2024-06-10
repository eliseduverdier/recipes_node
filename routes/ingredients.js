var express = require('express');
var router = express.Router();
const db = require('../db-config'); // Adjust the path as needed


const { getIngredientsByLabel, getRecipesByIngredient } = require('../models/ingredients/ingredientModel'); // Adjust the path as needed

router.get('/', function(req, res, next) {
  const sql = 'SELECT * FROM ingredients';

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({error: err.message});
    }
    res.render('ingredients', {
      title: 'Recipes',
      ingredients: results
    });
  });});

router.get('/:ingredient', function(req, res, next) {
      getRecipesByIngredient(req.params.ingredient, (err, recipesResult) => {
          if (err) {
              return res.status(500).json({ error: err.message });
          }

          // Render the template with data
          res.render('ingredient', {
              recipes: recipesResult,
              ingredient: req.params.ingredient
          });
      });
});

module.exports = router;
