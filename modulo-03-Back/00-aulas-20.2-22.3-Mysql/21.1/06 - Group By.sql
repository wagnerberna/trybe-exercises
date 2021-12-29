-- Usando apenas uma coluna de agregação
SELECT store_id
FROM sakila.customer
GROUP BY store_id;

-- Explicar como utilizar juntamente com outras colunas e funções de agregação
SELECT store_id, COUNT(*)
FROM sakila.customer
GROUP BY store_id;

-- Exemplificar a utilização de AVG, MIN, MAX e SUM
SELECT rating, AVG(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(rental_rate)
FROM sakila.film
GROUP by rating;