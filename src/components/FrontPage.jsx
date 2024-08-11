import ArticlesList from "./ArticlesList";
import Header from "./Header";
import SortByDropdown from "./SortByDropdown";

export default function FrontPage() {
  return (
    <div className="frontpage">
      <Header />
      <h2>Frontpage</h2>
      <SortByDropdown />
      <ArticlesList />
    </div>
  );
}
