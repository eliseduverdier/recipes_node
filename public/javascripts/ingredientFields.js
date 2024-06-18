const ingredientField = document.querySelector('.ingredient_field')
let count = 1

document.querySelector('.add_field').addEventListener('click', function (e) {
    count++;

    // create quantity and recipe fields
    const newIngredientQuantity = document.createElement('input');
    newIngredientQuantity.type = 'text';
    newIngredientQuantity.name = `ingredient_quantity[]`;
    newIngredientQuantity.placeholder = `quantity #${count}`;
    newIngredientQuantity.classList.add('ingredient_quantity');

    const newIngredientName = document.createElement('input');
    newIngredientName.type = 'text';
    newIngredientName.name = `ingredient_name[]`;
    newIngredientName.class = 'ingredient_name';
    newIngredientName.placeholder = `ingredient #${count}`;
    newIngredientName.classList.add('ingredient_name');

    // add them to a div
    const newIngredient = document.createElement('div');
    newIngredient.appendChild(newIngredientQuantity);
    newIngredient.appendChild(newIngredientName);


    // add this div to the document
    ingredientField.appendChild(newIngredient);
})
