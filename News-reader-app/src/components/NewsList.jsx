import NewsCard from "./NewsCard";

export default function NewsList({ articles }) {
  if (!articles.length) {
    return <p className="text-center text-gray-500">No articles found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a, i) => (
        <NewsCard key={i} article={a} />
      ))}
    </div>
  );
}
