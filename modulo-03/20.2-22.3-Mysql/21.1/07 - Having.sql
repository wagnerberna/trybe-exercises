SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 7;

-- O ALIAS melhora muito a leitura e torna o código mais legível
SELECT district, COUNT(*) AS district_count
FROM sakila.address
GROUP BY district
HAVING district_count >= 7;

-- O Alias com string não funciona!
SELECT district, COUNT(*) AS 'district count'
FROM sakila.address
GROUP BY district
HAVING 'district count' >= 7;