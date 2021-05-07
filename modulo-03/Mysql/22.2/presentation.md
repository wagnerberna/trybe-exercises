## Normalização e Modelagem de Banco de Dados
![Banco de Dados](https://media.giphy.com/media/l0G18q84KqOgJ3G8M/giphy.gif)

---

### O que foi visto até agora?
* Encontrar, filtrar, ordenar, agrupar, agregar e paginar dados dentro de uma tabela;
* Criar, alterar, excluir e popular tabelas;
* Executar as principais funções em textos além de funções matemáticas;
* Criar views, triggers, functions e índices;
* Modelar um banco de dados a partir de uma especificação.

---

### Normalização
![Normal](https://media.giphy.com/media/VCtbkdWLFfZmOpvzV2/giphy.gif)

---

### 1ª Forma Normal
![1NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/non-normalized-table.png?token=AA7NVWYOXMM4IZ6XR2JSGCTAJDGZY)

---

![1NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/1stForm.png?token=AA7NVW57HHJRDKHP3NHQVNLAJDG5C)

---

![1NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/1stFormNormalizedWithRules.png?token=AA7NVW4NZ5T6TB76MD3Q2MTAJDIAY)

---

### 2ª Forma Normal
![2NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/2ndFrom.png?token=AA7NVWZGJCGGBYN4EQT2CODAJDINO)

---

![2NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/1stFormTableFuncionario.png?token=AA7NVW2GXKYJOJCXPTEDMJTAJDIPA)

---

![2NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/1stFormTableTelefone.png?token=AA7NVW66WO3HIDJ7OZ3XYITAJDIQM)

---

![2NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/2ndFormAndTable.png?token=AA7NVWYJ63WD4LCF6RWRK3TAJDI4U)

---

![2NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/2ndFormNormalized_Option1.png?token=AA7NVW6IE25LK3LN2MHTTHTAJDJBW)

---

![2NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/2ndFormNormalized_Option2.png?token=AA7NVW2VBYZDSFJX3LALIYDAJDJCC)

---

### 3ª Forma Normal
![3NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/3rdForm.png?token=AA7NVWYGDDH7XDM2NLSZDODAJDJJG)

---

![3NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/2ndFormNormalized_Option1_withHighlight.png?token=AA7NVW4RUDPND4OWINHCETDAJDJKK)

---

![3NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/2ndFormNormalized_Option2_withHighlight.png?token=AA7NVWZFGHEPVD7OU5NCYZDAJDJL2)

---

![3NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/3ndFormNormalized_Option2.png?token=AA7NVW7OCOKGHWGW6EP2T3LAJDJWO)

---

![3NF](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-22/22-2/images/3ndFormNormalized_Option1.png?token=AA7NVW6EFK7TG6OQH4MJV33AJDJZM)

---

### Dump
![Dump](https://media.giphy.com/media/LnFgpK9l7HIizJKeul/giphy.gif)

---

### Dump
Backup
```
mysqldump -u root -p livraria > nomeDoArquivo.sql
```
Somente estrutura
```
mysqldump -u root -p --no-data livraria > nomeDoArquivo.sql
```

---

### Dump
Restore
```
mysqldump -u root -p livraria < nomeDoArquivo.sql
```

---

# Dúvidas?
![DÚVIDAS](https://media.giphy.com/media/d1E1YlkOTe4IfdNC/giphy.gif)

---

### Por Hoje é só Pessoal!
![Thats All Folks!](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/795px-Thats_all_folks.svg.png)