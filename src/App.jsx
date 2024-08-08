import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FrontPage from "./components/FrontPage";
import ArticlePage from "./components/ArticlePage";
import { getAllArticles } from "./api";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<FrontPage articles={articles} />} />
      <Route
        path="/articles/:article_id"
        element={<ArticlePage articles={articles} />}
      />
    </Routes>
  );
}

export default App;
