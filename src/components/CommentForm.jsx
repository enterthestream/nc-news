import { useContext, useState } from "react";
import { postComment } from "../api";
import { LoggedInUserContext } from "../context/UserContext";
import CommentCard from "./CommentCard";

export default function CommentForm({ article_id, article }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPostedComment, setShowPostedComment] = useState(false);
  const [postedComment, setPostedComment] = useState("");
  const [textBox, setTextbox] = useState("");

  const [flash, setFlash] = useState(false);

  const [isPosting, setIsPosting] = useState(false);

  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputComment = {
      author: loggedInUser.username,
      votes: 0,
      body: event.target.elements.comment.value,
      created_at: new Date(),
    };

    setIsPosting(true);

    postComment(article_id, loggedInUser.username, inputComment.body)
      .then(() => {
        setShowPostedComment(true);
        setPostedComment(inputComment);
        setTextbox("");
        setFlash(true);
        setTimeout(() => {
          setFlash(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Error when attempting to post comment:", err);
      })
      .finally(() => {
        setIsExpanded(false);
        setIsPosting(false);
      });
  };

  const handleTextBox = (event) => {
    setTextbox(event.target.value);
  };

  return (
    <div>
      <form
        method="post"
        onSubmit={handleSubmit}
        className={`comment-form ${isExpanded ? "expanded" : ""}`}
      >
        <label htmlFor="comment"></label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          value={textBox}
          placeholder="Reply..."
          onChange={handleTextBox}
          onFocus={handleExpand}
          required
        />
        {isExpanded && (
          <button type="submit" className="submit" disabled={isPosting}>
            {isPosting ? "Posting comment..." : "Add comment"}
          </button>
        )}
      </form>

      {postedComment && showPostedComment && (
        <div
          className={`comments-list article-page posted-comment ${
            flash ? "flash" : ""
          }`}
        >
          <CommentCard
            article_id={article_id}
            article={article}
            comment={postedComment}
            showPostedComment={showPostedComment}
            className={flash ? "flash" : ""}
          />
        </div>
      )}
    </div>
  );
}
