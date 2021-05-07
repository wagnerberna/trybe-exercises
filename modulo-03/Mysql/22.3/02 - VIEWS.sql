-- CREATE VIEW
CREATE VIEW FilmesDentroDasCategoriasPreferidas AS
SELECT f.title, c.name FROM sakila.film f
INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
INNER JOIN sakila.category c ON fc.category_id = c.category_id
WHERE fc.category_id IN (1,2,5,10,14);

SELECT * FROM FilmesDentroDasCategoriasPreferidas;

-- DROP VIEW
DROP VIEW FilmesDentroDasCategoriasPreferidas;