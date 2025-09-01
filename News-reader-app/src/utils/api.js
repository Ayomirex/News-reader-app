// Client should call our serverless proxy so the API key stays secret and
// so requests are allowed on NewsAPI Developer plan (server-side)
export async function fetchTopHeadlines({ country = "us", q, category, pageSize = 20 } = {}) {
  const params = new URLSearchParams();
  if (country) params.set("country", country);
  if (q) params.set("q", q);
  if (category) params.set("category", category);
  params.set("pageSize", pageSize);

  const res = await fetch(`/api/news?${params.toString()}`);
  const json = await res.json();
  if (!res.ok || json.status !== "ok") throw new Error(json.message || "Failed to fetch");
  return json.articles; // array of articles
}
