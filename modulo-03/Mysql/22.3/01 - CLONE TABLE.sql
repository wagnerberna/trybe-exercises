CREATE TABLE actor_clone LIKE sakila.actor;

SHOW COLUMNS FROM sakila.actor;
SHOW COLUMNS FROM sakila.actor_clone;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.actor_clone;