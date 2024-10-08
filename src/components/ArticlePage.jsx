import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback, useContext } from "react";
import ArticleCard from "./ArticleCard";
import Header from "./Header";
import CommentsList from "./CommentsList";
import { getCommentsByArticleId, deleteComment } from "../api";
import { ArticlesContext } from "../context/ArticlesContext";

export default function ArticlePage() {
  const { articles } = useContext(ArticlesContext);
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [articleComments, setArticleComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [deletedCommentIds, setDeletedCommentIds] = useState([]);

  useEffect(() => {
    const foundArticle = articles.find((article) => {
      return article.article_id === parseInt(article_id);
    });
    setArticle(foundArticle);
  }, [article_id, articles]);

  useEffect(() => {
    setIsLoadingComments(true);
    getCommentsByArticleId(article_id)
      .then((fetchedComments) => {
        setArticleComments(fetchedComments);
        setIsLoadingComments(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  const handleDeleteComment = useCallback(
    (commentId) => {
      return deleteComment(commentId)
        .then(() => {
          setArticleComments((prevComments) =>
            prevComments.filter((comment) => comment.comment_id !== commentId)
          );
          setDeletedCommentIds((prevDeletedIds) => [
            ...prevDeletedIds,
            commentId,
          ]);
        })

        .catch((err) => console.error(err));
    },
    [setArticleComments, setDeletedCommentIds]
  );

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
        body={article.body}
        showBody={true}
        isOnArticlePage={true}
      />
      <CommentsList
        article_id={article_id}
        article={article}
        articleComments={articleComments}
        setArticleComments={setArticleComments}
        isLoading={isLoadingComments}
        handleDeleteComment={handleDeleteComment}
        deletedCommentIds={deletedCommentIds}
      />
    </div>
  );
}
