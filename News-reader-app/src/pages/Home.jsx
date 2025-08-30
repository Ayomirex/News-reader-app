import { useState } from "react";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";
import useFetchNews from "../hooks/useFetchNews";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const { articles, loading, error, refetch } = useFetchNews({ query, category });

  const handleSearch = (term, cat) => {
    setQuery(term);
    setCategory(cat);
    refetch(term, cat);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">Error: {error.message}</p>}

      <NewsList articles={articles} />
    </div>
  );
}
