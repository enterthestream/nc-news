import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Header from "./Header";
import { getArticleById } from "../api";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (!article) {
    return <>loading...</>;
  }

  return (
    <div className="article-page">
      <Header />
      <ArticleCard
        article_id={article_id}
        author={article.author}
        title={article.title}
        votes={article.votes}
        article_img_url={article.article_img_url}
        comment_count={article.comment_count}
        topic={article.topic}
        showBody={true}
        body={article.body}
        isOnArticlePage={true}
      />
      <CommentForm article_id={article_id} />
      <CommentsList article_id={article_id} article={article} />
    </div>
  );
}
