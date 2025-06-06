from db import get_db_connection

# Retorna a lista de livros aplicando filtros dinâmicos e paginação.
# Os filtros aceitam busca parcial em 'author', 'title' e 'biography'.
def get_all_books(page=1, page_size=10, author=None, title=None, biography=None):
    try:
        # Conecta ao banco de dados SQLite
        conn = get_db_connection()

        # Define a row_factory para acessar os campos por nome, melhorando a legibilidade
        conn.row_factory = lambda cursor, row: {
            "id": row[0],
            "title": row[1],
            "author": row[2],
            "biography": row[3]
        }

        cursor = conn.cursor()

        # Inicia a query base
        query = "SELECT * FROM book WHERE 1=1"
        params = []

        # Filtros com LIKE (case-insensitive)
        if author:
            query += " AND LOWER(author) LIKE ?"
            params.append(f"%{author.lower()}%")

        if title:
            query += " AND LOWER(title) LIKE ?"
            params.append(f"%{title.lower()}%")

        if biography is not None and biography.strip() != "":
            query += " AND LOWER(biography) LIKE ?"
            params.append(f"%{biography.lower()}%")

        # Paginação
        offset = (page - 1) * page_size
        query += " LIMIT ? OFFSET ?"
        params.extend([page_size, offset])

        # Executa a consulta
        cursor.execute(query, params)
        books = cursor.fetchall()

        return books

    except Exception as e:
        return {"error": f"Erro ao buscar livros: {str(e)}"}

    finally:
        conn.close()
