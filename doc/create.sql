CREATE TABLE recipes_recipes
(
    `id`          INT(11)      NOT NULL auto_increment,
    `label`       VARCHAR(255) NOT NULL,
    `description` TEXT         NOT NULL,
    `type`        VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE `idx_label_unique` (`label`(255))
);


CREATE TABLE recipes_ingredients
(
    `id`    INT(11)      NOT NULL auto_increment,
    `label` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE `idx_label_unique` (`label`(255))
);


CREATE TABLE recipes_recipe_has_ingredient
(
    `recipe_id`     INT,
    `ingredient_id` INT,
    `quantity`      VARCHAR(255),
    FOREIGN KEY (recipe_id) REFERENCES recipes_recipes (id),
    FOREIGN KEY (ingredient_id) REFERENCES recipes_ingredients (id)
);
