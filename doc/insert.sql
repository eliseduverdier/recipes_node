INSERT INTO recipes
VALUES (1, 'pain', 'recette du pain', 'boulange'),
       (2, 'cookies', 'recette des cookies', 'dessert'),
       (3, 'boules_de_bain', 'recette des boules de bain', 'dessert')
;


INSERT INTO ingredients
VALUES (1, 'farine'),
       (2, 'beurre'),
       (3, 'sucre'),
       (4, 'eau')
--     (5, '')
--     (6, '')
--     (7, '')
--     (8, '')
--     (9, '')
--     (10, '')
;


INSERT INTO recipe_has_ingredient
VALUES
-- pain
(1, 1), -- farine
(1, 4), -- eau
--cookies
(2, 1), -- farine
(2, 2), -- beurre
(2, 3), -- sucre
;
