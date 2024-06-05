CREATE TABLE recipes
(
    `id`          INT(11) NOT NULL auto_increment,
    `label`       VARCHAR(255) NOT NULL,
    `description` TEXT         NOT NULL,
    `type`        VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE `idx_label_unique` (`label`(255))
);


CREATE TABLE ingredients
(
    `id`    INT(11) NOT NULL auto_increment,
    `label` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE `idx_label_unique` (`label`(255))
);


CREATE TABLE recipe_has_ingredient
(
    `recipe_id`     INT,
    `ingredient_id` INT,
    FOREIGN KEY (recipe_id) REFERENCES recipes (id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients (id)
);
