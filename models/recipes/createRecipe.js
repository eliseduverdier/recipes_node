const db = require("../../db-config")

const createRecipe = (requestBody, callback) => {

    let {recipe, description, type} = requestBody;
    let ingredientsQuantities = requestBody['ingredient_quantity[]'];
    let ingredientsNames = requestBody['ingredient_name[]'];
    if (typeof(ingredientsQuantities) === 'string') {
        ingredientsQuantities = [ingredientsQuantities]
    }
    if (typeof(ingredientsNames) === 'string') {
        ingredientsNames = [ingredientsNames]
    }
    let ingredients = matchIngredientsQuantity(ingredientsNames, ingredientsQuantities);
    // INSERTING THE RECIPE
    const sql = "INSERT INTO recipes_recipes (label, description, type) VALUES (?,?,?)";
    const recipeId = db.query(sql, [recipe, description, type], (err, resultRecipe) => {
        if (err) throw err;

        // INSERTING THE INGREDIENTS ONE BY ONE
        for (let key = 0; key < ingredients.length; key++) {
            const insertIngredientQuery = "INSERT IGNORE INTO recipes_ingredients (label) VALUES (?)";
            db.query(insertIngredientQuery, [ingredients[key]['ingredient']], (err, resultIng) => {
                if (err) throw err;

                // SELECTING THE INGREDIENT ID
                db.query('SELECT id FROM recipes_ingredients WHERE label=?', [ingredients[key]['ingredient']], (err, resultIngID) => {
                    let ingredientId = resultIngID[0].id

                    // INSERTING THE RELATION
                    const sql = `INSERT INTO recipes_recipe_has_ingredient (recipe_id, ingredient_id, quantity)
                                 VALUES (?, ?, ?)`
                    db.query(sql, [resultRecipe.insertId, ingredientId, ingredients[key]['quantity']], (err, resultRhi) => {
                        if (err) throw err;
                    })
                })
            })
        }
    });
};

module.exports = createRecipe;

function matchIngredientsQuantity(ingredients, quantities) {
    let list = []
    for (const key in ingredients) {
        list.push({
            quantity: quantities[key],
            ingredient: ingredients[key]
        });
    }
    return list;
}
