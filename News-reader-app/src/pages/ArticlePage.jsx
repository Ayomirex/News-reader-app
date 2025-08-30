import { useLocation, Link } from "react-router-dom";

export default function ArticlePage() {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-lg font-medium mb-4">No article data found.</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline font-semibold"
        >
          ← Go Back
        </Link>
      </div>
    );
  }

  const {
    title,
    urlToImage,
    content,
    description,
    author,
    source,
    url,
    publishedAt,
  } = article;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-lg shadow">
      {/* Article Image */}
      <img
        src={urlToImage || "/placeholder.jpg"}
        alt={title}
        className="w-full rounded mb-4 object-cover"
      />

      {/* Article Title */}
      <h1 className="text-3xl font-bold mb-3">{title}</h1>

      {/* Metadata */}
      <p className="text-gray-600 text-sm mb-4">
        {author && `By ${author} • `}
        {source?.name} • {new Date(publishedAt).toLocaleString()}
      </p>

      {/* Content */}
      <p className="text-lg mb-6">
        {content || description || "No content available."}
      </p>

      {/* External Link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        Read full article at source →
      </a>
    </div>
  );
}
