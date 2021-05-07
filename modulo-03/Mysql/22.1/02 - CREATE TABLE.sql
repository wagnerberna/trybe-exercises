CREATE TABLE autor(
autor_id INT PRIMARY KEY auto_increment,
nome VARCHAR(50)
);

CREATE TABLE categoria(
categoria_id INT primary key auto_increment,
nome varchar(50)
);

CREATE TABLE livro(
    livro_id INT PRIMARY KEY auto_increment,
    titulo varchar(70),
    preco DECIMAL(6,2),
    autor_id int NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES autor (autor_id),
    FOREIGN KEY (categoria_id) REFERENCES categoria (categoria_id)
);

SELECT * FROM categoria;
SELECT * FROM livro;
SELECT * FROM autor;