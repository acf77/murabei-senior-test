"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";

type Props = {
  onFilterChange: (filters: { author: string; title: string; biography: string }) => void;
};

export function FilterBar({ onFilterChange }: Props) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [biography, setBiography] = useState("");

  const [debouncedAuthor] = useDebounce(author, 500);
  const [debouncedTitle] = useDebounce(title, 500);
  const [debouncedBiography] = useDebounce(biography, 500);

  useEffect(() => {
    onFilterChange({
      author: debouncedAuthor,
      title: debouncedTitle,
      biography: debouncedBiography,
    });
  }, [debouncedAuthor, debouncedTitle, debouncedBiography, onFilterChange]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 bg-gray-900 p-4 rounded-md shadow-md">
      <Input
        placeholder="Filtrar por autor"
        className="bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Input
        placeholder="Filtrar por título"
        className="bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Filtrar por biografia"
        className="bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
      />
    </div>
  );
}
