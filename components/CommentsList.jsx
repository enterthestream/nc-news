import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "../src/api";

export default function CommentsList({ article, article_id }) {
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((fetchedComments) => {
        setArticleComments(fetchedComments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <div className="comments-list">
      {articleComments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            article={article}
          />
        );
      })}

      <p>in comments list</p>
    </div>
  );
}
