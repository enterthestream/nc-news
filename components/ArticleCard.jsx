import { useNavigate, useLocation } from "react-router-dom";

export default function ArticleCard({
  article_id,
  author,
  title,
  votes,
  article_img_url,
  comment_count,
  topic,
  showBody = false,
  body,
  isOnArticlePage = false,
}) {
  const navigate = useNavigate();

  const handleArticleClick = (event) => {
    event.preventDefault();

    if (!isOnArticlePage && article_id) {
      navigate(`/articles/${article_id}`);
    }
  };

  return (
    <div className="article-card" onClick={handleArticleClick}>
      <h3>{title}</h3>
      <h4 className="author-in-topic">
        <span className="author-topic">{author}</span> {""}in {""}
        <span className="author-topic">{topic}</span>
      </h4>
      <img
        src={article_img_url}
        alt={`image showing ${title}`}
        className="img-article-card"
      />
      {showBody && <p className="body">{body}</p>}
      <h4 className="votes">{votes} votes</h4>
      <p>{comment_count ? `${comment_count} comments` : `0 comments`}</p>
    </div>
  );
}
