import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import Header from "./Header";

export default function TopicArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    getArticlesByTopic(topic)
      .then(({ data: { articles } }) => {
        console.log(articles);
        setArticles(articles);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic]);
  console.log(articles);

  if (isLoading) {
    <h2>loading...</h2>;
  }

  return (
    <div>
      <Header />
      <h1>{topic}</h1>
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
