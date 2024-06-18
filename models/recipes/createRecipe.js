const db = require("../../db-config")

const createRecipe = (requestBody, callback) => {

    let {recipe, description, type} = requestBody;
    let ingredientsQuantities = requestBody['ingredient_quantity[]'];
    let ingredientsNames = requestBody['ingredient_name[]'];
    if (ingredientsQuantities instanceof String) {
        ingredientsQuantities = [ingredientsQuantities]
    }
    if (ingredientsNames instanceof String) {
        ingredientsNames = [ingredientsNames]
    }
    let ingredients = matchIngredientsQuantity(ingredientsNames, ingredientsQuantities);

    // INSERTING THE RECIPE
    const sql = "INSERT INTO recipes (label, description, type) VALUES (?,?,?)";
    const recipeId = db.query(sql, [recipe, description, type], (err, resultRecipe) => {
        if (err) throw err;

        // INSERTING THE INGREDIENTS ONE BY ONE
        for (let key = 0; key < ingredients.length; key++) {
            const insertIngredientQuery = "INSERT IGNORE INTO ingredients (label) VALUES (?)";
            db.query(insertIngredientQuery, [ingredients[key]['ingredient']], (err, resultIng) => {
                if (err) throw err;

                // SELECTING THE INGREDIENT ID
                db.query('SELECT id FROM ingredients WHERE label=?', [ingredients[key]['ingredient']], (err, resultIngID) => {
                    let ingredientId = resultIngID[0].id
                    console.log('>>>', ingredientId)

                    // INSERTING THE RELATION
                    const sql = `INSERT INTO recipe_has_ingredient (recipe_id, ingredient_id, quantity)
                                 VALUES (?, ?, ?)`
                    db.query(sql, [resultRecipe.insertId, ingredientId, ingredients[key]['quantity']], (err, resultRhi) => {
                        if (err) throw err;

                        console.log('inserted r_h_i', resultRecipe.insertId, ingredients[key]['ingredient'], ingredients[key]['quantity'])
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
