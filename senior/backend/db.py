import sqlite3

# Função para obter conexão com o banco de dados SQLite
def get_db_connection():
    conn = sqlite3.connect("db.sqlite")
    return conn
