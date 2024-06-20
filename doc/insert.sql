INSERT INTO recipes_recipes
VALUES (1, 'pain', 'recette du pain', 'boulange'),
       (2, 'cookies', 'recette des cookies', 'dessert')
;


INSERT INTO recipes_ingredients
VALUES (1, 'farine'),
       (2, 'beurre'),
       (3, 'sucre'),
       (4, 'eau')
;


INSERT INTO recipes_recipe_has_ingredient
VALUES
-- pain
(1, 1, '500g'), -- farine
(1, 4, '300g'), -- eau
-- cookies
(2, 1, '150g'), -- farine
(2, 2, '100g'), -- beurre
(2, 3, '120g') -- sucre
;
