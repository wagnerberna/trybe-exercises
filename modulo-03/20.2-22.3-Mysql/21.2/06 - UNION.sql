SELECT City FROM Customers;
SELECT City FROM Suppliers;

SELECT City FROM Customers
UNION
SELECT City FROM Suppliers;