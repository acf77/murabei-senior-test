"use client";

import { useEffect, useState } from "react";
import { fetchBooks } from "@/lib/api";
import { FilterBar } from "@/components/FilterBar";

type Book = {
  id: number;
  title: string;
  author: string;
  biography: string;
};

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filters, setFilters] = useState({
    author: "",
    title: "",
    biography: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const result = await fetchBooks(filters);
        setBooks(result);
        setError(null);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Erro desconhecido.");
        }
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [filters]);

  return (
    <main className="p-6 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Document Finder</h1>

      <FilterBar onFilterChange={setFilters} />

      {loading ? (
        <div className="text-gray-400 mt-4">Carregando livros...</div>
      ) : error ? (
        <div className="text-red-500 mt-4">Erro: {error}</div>
      ) : books.length === 0 ? (
        <div className="text-gray-400 mt-4">Nenhum livro encontrado com os filtros.</div>
      ) : (
        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-gray-700 text-sm text-white bg-gray-900">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="p-3 border border-gray-700">ID</th>
                <th className="p-3 border border-gray-700">Autor</th>
                <th className="p-3 border border-gray-700">Título</th>
                <th className="p-3 border border-gray-700">Biografia</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-700">
                  <td className="p-3 border border-gray-700">{book.id}</td>
                  <td className="p-3 border border-gray-700">{book.author}</td>
                  <td className="p-3 border border-gray-700">{book.title}</td>
                  <td className="p-3 border border-gray-700 whitespace-pre-line">
                    <div dangerouslySetInnerHTML={{ __html: book.biography }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
