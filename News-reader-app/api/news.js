// Serverless proxy for NewsAPI to avoid client-side restrictions on Developer plan
// This runs on Vercel and uses the server environment variable (not exposed to the browser)
export default async function handler(req, res) {
  try {
    const { q, category, country = 'us', pageSize = '20' } = req.query;

    const API_KEY = process.env.VITE_NEWS_API_KEY || process.env.NEWS_API_KEY;
    if (!API_KEY) {
      res.status(500).json({ status: 'error', message: 'News API key not configured on server' });
      return;
    }

    const url = new URL('https://newsapi.org/v2/top-headlines');
    url.searchParams.set('apiKey', API_KEY);
    if (country) url.searchParams.set('country', country);
    if (q) url.searchParams.set('q', q);
    if (category) url.searchParams.set('category', category);
    if (pageSize) url.searchParams.set('pageSize', pageSize);

    const r = await fetch(url.toString());
    const json = await r.json();

    if (!r.ok) {
      res.status(r.status || 500).json({ status: 'error', message: json.message || 'Failed to fetch from NewsAPI' });
      return;
    }

    // Forward the NewsAPI response as-is (including articles)
    res.status(200).json(json);
  } catch (err) {
    console.error('api/news error', err);
    res.status(500).json({ status: 'error', message: err.message || 'Internal server error' });
  }
}
