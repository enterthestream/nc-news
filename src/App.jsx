import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FrontPage from "./components/FrontPage";
import ArticlePage from "./components/ArticlePage";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={<FrontPage articles={articles} setArticles={setArticles} />}
      />
      <Route
        path="/articles/:article_id"
        element={<ArticlePage articles={articles} setArticles={setArticles} />}
      />
    </Routes>
  );
}

export default App;
