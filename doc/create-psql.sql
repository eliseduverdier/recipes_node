CREATE TABLE recipes_recipes
(
    id          serial primary key,
    label       VARCHAR(255) NOT NULL,
    description TEXT         NOT NULL,
    type        VARCHAR(255) NOT NULL
);


CREATE TABLE recipes_ingredients
(
    id    serial primary key,
    label VARCHAR(255) UNIQUE NOT NULL
);


CREATE TABLE recipes_recipe_has_ingredient
(
    recipe_id integer REFERENCES recipes_recipes (id),
    ingredient_id integer REFERENCES recipes_ingredients (id),
    quantity      VARCHAR(255)
);
