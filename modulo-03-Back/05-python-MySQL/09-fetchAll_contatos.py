from db import new_connection
from mysql.connector import ProgrammingError

sql = "SELECT * FROM contatos"

with new_connection() as conn:
    try:
        cursor = conn.cursor()
        cursor.execute(sql)
        contatos = cursor.fetchall()
        print(list(contatos))

    except ProgrammingError as e:
        print(f"Erro: {e.msg}")
    else:
        # 2d 10s número de caracteres a ser exibido
        for el in contatos:
            print(f"ID:{el[0]:2d} - Nome:{el[1]:10s} -Telefone:{el[2]}")
