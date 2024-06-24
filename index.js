require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const index = express();
const dbConfig = require('./db-config.js');
const bodyParser = require('body-parser')

// -------
// ROUTES
// -------
var indexPage = require('./routes/index');
// INGREDIENTS
var listIngredients = require('./routes/ingredients/list');
var viewIngredient = require('./routes/ingredients/view');
// RECIPES
var deleteRecipe = require('./routes/recipes/delete');
var newRecipe = require('./routes/recipes/new');
var listRecipes = require('./routes/recipes/list');
var viewRecipe = require('./routes/recipes/view');

index.use('/', indexPage);
index.use('/ingredients', listIngredients);
index.use('/ingredients', viewIngredient);
index.use('/recipes', deleteRecipe);
index.use('/recipes', newRecipe);
index.use('/recipes', listRecipes);
index.use('/recipes', viewRecipe);


// ----------
// TEMPLATES
// ----------
index.set('views', path.join(__dirname, 'views'));
index.set('view engine', 'jade');

index.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle JSON requests
index.use(express.json());
index.use(express.urlencoded({ extended: true }));
const jsonParser = bodyParser.json()

// Define the port and start the server
const PORT = process.env.PORT || 3000;
index.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
