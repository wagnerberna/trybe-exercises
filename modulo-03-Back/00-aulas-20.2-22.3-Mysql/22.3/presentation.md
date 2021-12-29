## Normalização e Modelagem de Banco de Dados
![Banco de Dados](https://media.giphy.com/media/l0G18q84KqOgJ3G8M/giphy.gif)

---

### Transformando ideias em um modelo de banco de dados - Parte 2
![Ideia](https://media.giphy.com/media/l0LEIXSRRuv9QQIRNI/giphy.gif)

---

### Clonagem de Tabelas Existentes
![Clone](https://media.giphy.com/media/TlK63EA6F1qRb7lll6M/source.gif)

---

### Clonagem de Tabelas Existentes
```
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_copiada;
```

---

### Clonagem de Tabelas Existentes
![O que é clonado](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-3/images/clone1.jpg?token=AA7NVW5UX4CPSODKJO53YODAJF66W)

---

### Criação de VIEWS
![Views](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-3/images/view_benefits.jpg?token=AA7NVW3ER2V45QCOQYM7HZDAJF7E4)

---

### Criação de VIEWS
```
CREATE VIEW nome_da_view AS query
```
A `query`, no caso, é a consulta criada que dará origem à VIEW.

---

### Destruindo VIEWS
```
DROP VIEW nome_da_view;
```

---

### Como Alterar a Estrutura de Tabelas
```
ALTER TABLE nome_tabela ADD COLUMN nome_coluna <alteração>;
```

---

### Destruindo Tabelas
```
DROP TABLE nome_da_tabela;
```

---

### ÍNDICES
![Índices](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-3/images/book_summary.png?token=AA7NVW675AWRJWLBCMD377TAJGABC)

---

### ÍNDICES
* PRIMARY KEY
* UNIQUE INDEX
* FULLTEXT INDEX
* INDEX

---

### ÍNDICES
```
CREATE INDEX nome_indice ON nome_tabela (nome_coluna);
```

```
DROP INDEX nome_indice ON nome_tabela;
```

---

### ÍNDICES
![Índices](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-3/images/index_pros_and_cons.jpg?token=AA7NVW5JJLNM6AIPPZQ5G7TAJGAW6)

---

# Dúvidas?
![DÚVIDAS](https://media.giphy.com/media/d1E1YlkOTe4IfdNC/giphy.gif)

---

### Por Hoje é só Pessoal!
![Thats All Folks!](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/795px-Thats_all_folks.svg.png)