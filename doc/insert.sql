INSERT INTO recipes_recipes
VALUES (1, 'pain', 'recette du pain', 'boulange'),
       (2, 'cookies', 'Sucre + beurre, ajouter farine, ajouter pepites choco.\nCuire 9 minutes à 200%', 'dessert')
;


INSERT INTO recipes_ingredients
VALUES (1, 'farine'),
       (2, 'beurre'),
       (3, 'sucre'),
       (4, 'eau'),
       (5, 'chocolat')
;


INSERT INTO recipes_recipe_has_ingredient
VALUES
-- pain
(1, 1, '500g'), -- farine
(1, 4, '300g'), -- eau
-- cookies
(2, 1, '150g'), -- farine
(2, 2, '100g'), -- beurre
(2, 3, '120g'), -- sucre
(2, 5, '50g') -- chocolat
;
