SELECT f.*
FROM (SELECT * FROM sakila.film WHERE title LIKE '%air%') as f;

SELECT
  customer_id,
  first_name,
  (SELECT address FROM sakila.address AS a WHERE a.address_id = ct.address_id) AS 'Endereço'
FROM sakila.customer ct;

SELECT
  first_name,
  last_name
FROM sakila.actor
WHERE actor_id IN (
  SELECT actor_id
  FROM sakila.film_actor
  GROUP BY actor_id
  HAVING COUNT(*) > 20
);

-- Subquery x Join

SELECT
  customer_id,
  first_name,
  (SELECT address FROM sakila.address AS a WHERE a.address_id = ct.address_id) AS 'Endereço'
FROM sakila.customer ct;

SELECT
  ct.customer_id,
  ct.first_name,
  a.address
FROM sakila.customer AS ct
LEFT JOIN sakila.address AS a ON ct.address_id = a.address_id;

-- EXISTS

SELECT
  EmployeeID,
  FirstName
FROM Employees e
WHERE EXISTS (
  SELECT EmployeeID
  FROM Orders o
  GROUP BY EmployeeID
  HAVING COUNT(*) > 30)
ORDER BY EmployeeID;