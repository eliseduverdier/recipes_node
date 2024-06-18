const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const dbConfig = require('./db-config.js');
var bodyParser = require('body-parser')


// -------
// ROUTES
// -------
var index = require('./routes/index');
// INGREDIENTS
var listIngredients = require('./routes/ingredients/list');
var viewIngredient = require('./routes/ingredients/view');
// RECIPES
var newRecipe = require('./routes/recipes/new');
var listRecipes = require('./routes/recipes/list');
var viewRecipe = require('./routes/recipes/view');

app.use('/', index);
app.use('/ingredients', listIngredients);
app.use('/ingredients', viewIngredient);
app.use('/recipes', newRecipe);
app.use('/recipes', listRecipes);
app.use('/recipes', viewRecipe);


// ----------
// TEMPLATES
// ----------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jsonParser = bodyParser.json()

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
