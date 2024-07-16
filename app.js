require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

// -------
// ROUTES
// -------
const indexPage = require('./routes/index');
const loginPage = require('./routes/login/login');
// INGREDIENTS
const listIngredients = require('./routes/ingredients/list');
const viewIngredient = require('./routes/ingredients/view');
// RECIPES
const deleteRecipe = require('./routes/recipes/delete');
const newRecipe = require('./routes/recipes/new');
const listRecipes = require('./routes/recipes/list');
const viewRecipe = require('./routes/recipes/view');

app.use('/', indexPage);
app.use('/login', loginPage);
app.use('/ingredients', listIngredients);
app.use('/ingredients', viewIngredient);
app.use('/recipes', deleteRecipe);
app.use('/recipes', newRecipe);
app.use('/recipes', listRecipes);
app.use('/recipes', viewRecipe);

// ----------
// TEMPLATES
// ----------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle JSON requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const jsonParser = bodyParser.json()

// Define the port and start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

module.exports = app;
