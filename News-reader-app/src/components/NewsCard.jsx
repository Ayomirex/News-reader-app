import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  const { title, urlToImage, description, publishedAt } = article;

  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={urlToImage || "/placeholder.jpg"}
        alt={title}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-auto flex justify-between items-center">
        <time className="text-xs text-gray-500">
          {new Date(publishedAt).toLocaleString()}
        </time>
        <Link
          to="/article"
          state={{ article }}
          className="text-blue-600 text-sm hover:underline"
        >
          Read →
        </Link>
      </div>
    </article>
  );
}

