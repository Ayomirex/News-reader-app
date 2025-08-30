import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">📰 News Reader</Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </main>

      <footer className="bg-gray-200 p-4 text-center text-sm">
        Built with React + Tailwind 🚀
      </footer>
    </div>
  );
}
