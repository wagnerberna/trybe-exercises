## Funções SQL, Joins e Subqueries
![SQL](https://media.giphy.com/media/vISmwpBJUNYzukTnVx/giphy.gif)

---

## Descomplicando JOINS, UNIONS e Subqueries
![Complicado](https://media.giphy.com/media/3oriNNm0VCA73UhVbq/giphy.gif)

---

### Trabalhando com JOIN's
![Simpsons](https://media.giphy.com/media/Yq7n1sakPfO1d0O9Wn/giphy.gif)

* INNNER JOIN
* LEFT JOIN
* RIGHT JOIN
* SELF JOIN

---

### Trabalhando com JOIN's
![JOINs](https://www.thecrazyprogrammer.com/wp-content/uploads/2019/05/Joins-in-SQL-Inner-Outer-Left-and-Right-Join.jpg)

---

### Trabalhando com UNION's
![UNION](https://lh6.googleusercontent.com/OSvoewMol5ukLWH19K7Ffrgd6zgvfrP91RjCTxXYS6CAyaHjznzavZzka0NraQJxL1PwFOc6My_djgwqKDJW1X_lyL47-txlYKpq-2HVKAftMd8dLMcM4z1hgAdybH6D3ExWMouz)

---

### Trabalhando com UNION's
![UNION ALL](https://lh4.googleusercontent.com/I1EPG9JsbvQ2PEu3MT8MqVFwPF8chYGBvS5QqTW6IQxgvGeD5K_kk2LNHXvBD0WNyXqA3LNr1FTNT1lpZXPhU9aoJlf1c50CTmKRPIyfQL2wuVHZcLYcAu3QEj8CuoWUENDaTdCY)

---

### Subqueries

`FROM`

```
SELECT f.*
FROM (SELECT * FROM sakila.film WHERE title LIKE '%air%') as f;
```

---

### Subqueries

`COLUMN`

```
SELECT
    customer_id,
    first_name,
    (SELECT address FROM sakila.address AS a WHERE a.address_id = ct.address_id) AS 'Endereço'
FROM sakila.customer ct;
```

---

### Subqueries

`WHERE`

```
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
```

---

# Dúvidas?
![DÚVIDAS](https://media.giphy.com/media/d1E1YlkOTe4IfdNC/giphy.gif)

---

### Por Hoje é só Pessoal!
![Thats All Folks!](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/795px-Thats_all_folks.svg.png)