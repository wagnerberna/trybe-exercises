-- PRIMARY KEY
-- UNIQUE INDEX
-- FULLTEXT INDEX
-- INDEX

CREATE INDEX index_country
ON sakila.country (country);

SELECT * FROM sakila.country
WHERE country = 'Sudan';

DROP INDEX index_country ON sakila.country;

CREATE FULLTEXT INDEX description_index
ON sakila.film (description);

SELECT * FROM sakila.film
WHERE MATCH (description) AGAINST('a fanciful documentary');

DROP INDEX description_index ON sakila.film;

SELECT * FROM sakila.film
WHERE description LIKE '%a fanciful documentary%';