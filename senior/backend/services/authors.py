from db import get_db_connection

# Retorna uma lista com todos os autores cadastrados no banco de dados.
def get_authors():
    try:
        # Conecta ao banco de dados SQLite
        conn = get_db_connection()
        cursor = conn.cursor()

        # Executa uma consulta SQL para buscar todos os autores
        cursor.execute('SELECT * FROM author;')
        authors = cursor.fetchall()

        # Constrói uma lista de dicionários com os dados dos autores
        author_list = []
        for author in authors:
            author_dict = {
                'id': author[0],
                'title': author[1],
                'slug': author[2],
                'biography': author[3]
            }
            author_list.append(author_dict)

        # Retorna a lista como JSON
        return author_list

    except Exception as e:
        # Em caso de erro, retorna a mensagem para o frontend
        return {"error": f"Erro ao buscar autores: {str(e)}"}

    finally:
        # Encerra a conexão com o banco de dados
        conn.close()
