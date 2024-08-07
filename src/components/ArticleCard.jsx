import { useNavigate } from "react-router-dom";
import { updateArticleById } from "../api";
import { useState } from "react";

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
  const [vote, setVote] = useState(votes);

  const navigate = useNavigate();

  const handleArticleClick = (event) => {
    event.preventDefault();

    if (!isOnArticlePage && article_id) {
      navigate(`/articles/${article_id}`);
    }
  };

  const handleUpVote = (event) => {
    event.preventDefault();

    setVote((currVote) => {
      return currVote + 1;
    });
    updateArticleById(article_id, 1).catch(() => {
      return currVote - 1;
    });
  };

  const handleDownVote = (event) => {
    event.preventDefault();

    setVote((currVote) => {
      return currVote - 1;
    });
    updateArticleById(article_id, -1).catch(() => {
      return currVote + 1;
    });
  };

  return (
    <div className="article-card">
      <a href={`/articles/${article_id}`} className="article-link">
        <h3 onClick={handleArticleClick}>{title}</h3>
      </a>

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
      <div className="votes">
        <button className="vote-button upvote" onClick={handleUpVote}>
          ⇧
        </button>
        <h4 className="num-votes">{vote} votes</h4>

        <button className="vote-button downvote" onClick={handleDownVote}>
          ⇩
        </button>
      </div>

      <p>{comment_count ? `${comment_count} comments` : `0 comments`}</p>
    </div>
  );
}
