const db = require("../db-config")

const CREATE_RECIPE = `CREATE TABLE recipes_recipes
                       (
                           \`id\`          INT(11)      NOT NULL auto_increment,
                           \`label\`       VARCHAR(255) NOT NULL,
                           \`description\` TEXT         NOT NULL,
                           \`type\`        VARCHAR(255) NOT NULL,
                           PRIMARY KEY (\`id\`),
                           UNIQUE \`idx_label_unique\` (\`label\`(255))
                       );`;
const CREATE_INGREDIENTS = `CREATE TABLE recipes_ingredients
                            (
                                \`id\`    INT(11)      NOT NULL auto_increment,
                                \`label\` VARCHAR(255) NOT NULL,
                                PRIMARY KEY (\`id\`),
                                UNIQUE \`idx_label_unique\` (\`label\`(255))
                            );`;
const CREATE_RHI = `CREATE TABLE recipes_recipe_has_ingredient
                    (
                        \`recipe_id\`     INT,
                        \`ingredient_id\` INT,
                        \`quantity\`      VARCHAR(255),
                        FOREIGN KEY (recipe_id) REFERENCES recipes_recipes (id),
                        FOREIGN KEY (ingredient_id) REFERENCES recipes_ingredients (id)
                    );`;
const INSERT_RECIPE = `INSERT INTO recipes_recipes
                       VALUES (1, 'pain', 'recette du pain', 'boulange'),
                              (2, 'cookies', 'Sucre + beurre, ajouter farine, ajouter pepites choco.\\nCuire 9 minutes à 200%', 'dessert')
;`;
const INSERT_INGREDIENTS = `INSERT INTO recipes_ingredients
                            VALUES (1, 'farine'),
                                   (2, 'beurre'),
                                   (3, 'sucre'),
                                   (4, 'eau'),
                                   (5, 'chocolat')
;`;
const INSERT_RHI = `INSERT INTO recipes_recipe_has_ingredient
                    VALUES
-- pain
(1, 1, '500g'), -- farine
(1, 4, '300g'), -- eau
-- cookies
(2, 1, '150g'), -- farine
(2, 2, '100g'), -- beurre
(2, 3, '120g'), -- sucre
(2, 5, '50g') -- chocolat
;`;

const initDatabase = (callback) => {
    db.query(CREATE_RECIPE, [], (err, results) => {
        db.query(CREATE_INGREDIENTS, [], (err, results) => {
            db.query(CREATE_RHI, [], (err, results) => {
                db.query(INSERT_RECIPE, [], (err, results) => {
                    db.query(INSERT_INGREDIENTS, [], (err, results) => {
                        db.query(INSERT_RHI, [], (err, results) => {
                            callback(null, results);
                        });
                    });
                });
            });
        });
    });
};

module.exports = initDatabase;
