from connection import conn

# print(conn)

# cria o método cursor q executa comandos no banco
cursor = conn.cursor()
cursor.execute("CREATE DATABASE IF NOT EXISTS agenda")
