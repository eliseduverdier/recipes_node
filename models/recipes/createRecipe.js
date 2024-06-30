// import { sql } from '@vercel/postgres';
const db = require('../../db-config');

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
    const sql = `INSERT INTO recipes_recipes (label, description, type) VALUES ($1,$2,$3)`;
    const recipeId = db.query(sql, [recipe, description, type], (err, resultRecipe) => {
        if (err) throw err;

        // INSERTING THE INGREDIENTS ONE BY ONE
        for (let key = 0; key < ingredients.length; key++) {
            const insertIngredientQuery = "INSERT INTO recipes_ingredients (label) VALUES ($1) ON CONFLICT (label) DO NOTHING";
            db.query(insertIngredientQuery, [ingredients[key]['ingredient']], (err, resultIng) => {
                if (err) throw err;

                // SELECTING THE INGREDIENT ID
                db.query('SELECT id FROM recipes_ingredients WHERE label=$1', [ingredients[key]['ingredient']], (err, resultIngID) => {
                    let ingredientId = resultIngID.rows[0].id

                    // INSERTING THE RELATION
                    const sql = `INSERT INTO recipes_recipe_has_ingredient (recipe_id, ingredient_id, quantity)
                                 VALUES ((SELECT id FROM recipes_recipes WHERE label=$1), $2, $3)`
                    db.query(sql, [recipe, ingredientId, ingredients[key]['quantity']], (err, resultRhi) => {
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
