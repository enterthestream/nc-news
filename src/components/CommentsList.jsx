import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function CommentsList({
  article,
  article_id,
  articleComments,
  setArticleComments,
  isLoading,
  handleDeleteComment,
  deletedCommentIds,
}) {
  return (
    <div className="article-page">
      <CommentForm
        article_id={article_id}
        setArticleComments={setArticleComments}
        handleDeleteComment={handleDeleteComment}
        deletedCommentIds={deletedCommentIds}
      />
      <section className="comments-list">
        {isLoading
          ? "loading..."
          : articleComments.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  article={article}
                  handleDeleteComment={handleDeleteComment}
                  setArticleComments={setArticleComments}
                />
              );
            })}
      </section>
    </div>
  );
}
