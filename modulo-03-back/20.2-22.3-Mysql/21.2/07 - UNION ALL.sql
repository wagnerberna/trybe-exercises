SELECT City FROM Customers;
SELECT City FROM Suppliers;

SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers;