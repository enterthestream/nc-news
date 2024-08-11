import { useEffect, useState, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Header from "./Header";
import { getSearchParamsValues } from "../utils";
import SortByDropdown from "./SortByDropdown";

export default function TopicArticles() {
  const { topic } = useParams();
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { sortBy, order } = getSearchParamsValues(searchParams);
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortBy, order)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <Header />
      <h1>{topic}</h1>
      <SortByDropdown />
      <section>
        {articles.map((article) => {
          const {
            article_id,
            author,
            title,
            votes,
            article_img_url,
            comment_count,
          } = article;
          return (
            <ArticleCard
              key={article_id}
              article_id={article_id}
              author={author}
              title={title}
              votes={votes}
              article_img_url={article_img_url}
              comment_count={comment_count}
              topic={topic}
              showBody={false}
            />
          );
        })}
      </section>
    </div>
  );
}
