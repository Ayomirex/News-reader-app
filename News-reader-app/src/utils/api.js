const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE = "https://newsapi.org/v2";

export async function fetchTopHeadlines({ country = "us", q, category, pageSize = 20 } = {}) {
  const params = new URLSearchParams();
  params.set("apiKey", API_KEY);
  if (country) params.set("country", country);
  if (q) params.set("q", q);
  if (category) params.set("category", category);
  params.set("pageSize", pageSize);

  const res = await fetch(`${BASE}/top-headlines?${params.toString()}`);
  const json = await res.json();
  if (!res.ok || json.status !== "ok") throw new Error(json.message || "Failed to fetch");
  return json.articles; // array of articles
}
