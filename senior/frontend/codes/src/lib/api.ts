export async function fetchBooks(filters: {
  author?: string;
  title?: string;
  biography?: string;
}) {
  const queryParams = new URLSearchParams();

  if (filters.author) queryParams.append("author", filters.author);
  if (filters.title) queryParams.append("title", filters.title);
  if (filters.biography) queryParams.append("biography", filters.biography);

  const res = await fetch(
    `http://localhost:5000/api/v1/books?${queryParams.toString()}`
  );

  if (!res.ok) throw new Error("Erro ao buscar livros");

  return res.json();
}
