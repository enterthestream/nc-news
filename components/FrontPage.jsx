import { useState } from "react";
import ArticlesList from "./ArticlesList";
import Header from "./Header";

export default function FrontPage() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="frontpage">
      <Header />
      <h2>Frontpage</h2>
      <ArticlesList articles={articles} setArticles={setArticles} />
    </div>
  );
}
