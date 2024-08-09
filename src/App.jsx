import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FrontPage from "./components/FrontPage";
import ArticlePage from "./components/ArticlePage";
import { getAllArticles } from "./api";
import TopicsList from "./components/TopicsList";
import TopicArticles from "./components/TopicArticles";

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
      <Route path="/topics" element={<TopicsList articles={articles} />} />
      <Route path="/topics/:topic" element={<TopicArticles />} />
    </Routes>
  );
}

export default App;
