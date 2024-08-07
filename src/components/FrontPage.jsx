import ArticlesList from "./ArticlesList";
import Header from "./Header";

export default function FrontPage({ articles, setArticles }) {
  return (
    <div className="frontpage">
      <Header />
      <h2>Frontpage</h2>
      <ArticlesList articles={articles} setArticles={setArticles} />
    </div>
  );
}
