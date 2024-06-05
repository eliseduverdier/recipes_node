const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const dbConfig = require('./db-config.js');
// -------
// ROUTES
// -------
var indexRouter = require('./routes/index');
var ingredients = require('./routes/ingredients');
var recipes = require('./routes/recipes');

app.use('/', indexRouter);
app.use('/ingredients', ingredients);
app.use('/recipes', recipes);


// ----------
// TEMPLATES
// ----------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// Middleware to handle JSON requests
app.use(express.json());



// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
