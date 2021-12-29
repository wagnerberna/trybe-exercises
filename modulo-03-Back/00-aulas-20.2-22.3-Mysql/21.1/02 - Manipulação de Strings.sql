SELECT LENGTH('Curso BeTrybe'); -- exibe tamanho da string passada como parâmetro

SELECT UCASE('Curso BeTrybe'); -- transforma em caixa alta a string passada como parâmetro

SELECT LCASE('Curso BeTrybe'); -- transforma em caixa baixa a string passada como parâmetro

SELECT REPLACE('Curso BeTrybe', 'Trybe', 'Awesome'); -- substitui todas as ocorrências de 'e' por 'eeee' em 'Curso BeTrybe'

SELECT LEFT('Curso BeTrybe', 5); -- extrai 5 caracteres a partir da esquerda

SELECT RIGHT('Curso BeTrybe', 5); -- extrai 5 caracteres a partir da direita

-- SUBSTRING(string, posição_inicial)
SELECT SUBSTRING('Curso BeTrybe', 6); -- extrai uma string, começando a partir do sexto caractere à esquerda

-- SUBSTRING(string, posição_inicial, tamanho)
SELECT SUBSTRING('Curso BeTrybe', 6, 3); -- extrai uma string de tamanho 4, começando a partir do segundo caractere à esquerda
SELECT SUBSTRING('Curso BeTrybe', 7, 3);

SELECT SUBSTRING('Curso BeTrybe', -5, 3); -- extrai uma string de tamanho 6, começando a partir do quinto caractere à direita