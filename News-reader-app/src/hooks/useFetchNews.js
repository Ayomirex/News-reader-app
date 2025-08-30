import { useState, useEffect, useCallback } from "react";
import { fetchTopHeadlines } from "../utils/api";

export default function useFetchNews({ query = "", category = "" } = {}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async (q = query, c = category) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTopHeadlines({ q, category: c });
      setArticles(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [query, category]);

  useEffect(() => {
    load();
  }, [load]);

  return { articles, loading, error, refetch: load };
}
