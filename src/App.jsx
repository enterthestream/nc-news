import { useState } from "react";
import ArticlesList from "../components/ArticlesList";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <Routes>
      <Route
        path="/"
        element={<ArticlesList articles={articles} setArticles={setArticles} />}
      />
    </Routes>
  );
}

export default App;
