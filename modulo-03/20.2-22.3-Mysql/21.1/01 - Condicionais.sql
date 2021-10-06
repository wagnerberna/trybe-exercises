-- Usando o IF (2 condições)
SELECT title, release_year, length,
IF (length <= 60, 'Short duration', 'Long duration') AS film_duration_type
FROM sakila.film;

-- Usando o CASE (mais de 2 condições)
SELECT title, release_year, length,
CASE
    WHEN length <= 60 THEN 'Short duration'
    WHEN length > 60 AND length <= 150 THEN 'Medium duration'
    ELSE 'Long duration'
END AS film_duration_type
FROM sakila.film;