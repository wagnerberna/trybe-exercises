from connection import conn


cursor = conn.cursor()
cursor.execute("SHOW DATABASES")

# start inicia o i com 1
for i, database in enumerate(cursor, start=1):
    print(f"Banco de Dados {i}: {database[0]}")
