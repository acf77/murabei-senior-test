from flask import Flask, jsonify, request
from flask_cors import CORS
from services.books import get_all_books
from services.authors import get_authors

app = Flask(__name__)
CORS(app)

# Rota raiz para verificação do funcionamento da API
@app.route("/", methods=["GET"])
def hello_world():
    return "Hello, World!"

# Rota que retorna uma lista de livros com filtros e paginação
@app.route("/api/v1/books", methods=["GET"])
def route_get_books():
    try:
        page = request.args.get("page", default=1, type=int)
        page_size = request.args.get("page_size", default=10, type=int)
        author = request.args.get("author")
        title = request.args.get("title")
        biography = request.args.get("biography")

        result = get_all_books(page, page_size, author, title, biography)

        if isinstance(result, dict) and result.get("error"):
            return jsonify(result), 500

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": f"Erro interno: {str(e)}"}), 500

# Rota que retorna todos os autores cadastrados
@app.route("/api/v1/authors", methods=["GET"])
def route_get_authors():
    try:
        result = get_authors()

        if isinstance(result, dict) and result.get("error"):
            return jsonify(result), 500

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": f"Erro interno: {str(e)}"}), 500

# Inicializa o servidor Flask
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
