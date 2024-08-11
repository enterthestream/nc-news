import "./App.css";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import ArticlePage from "./components/ArticlePage";
import TopicsList from "./components/TopicsList";
import TopicArticles from "./components/TopicArticles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/articles/:article_id" element={<ArticlePage />} />
      <Route path="/topics" element={<TopicsList />} />
      <Route path="/topics/:topic" element={<TopicArticles />} />
    </Routes>
  );
}

export default App;
