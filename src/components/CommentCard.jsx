import { useState, useContext } from "react";
import TimeSincePosted from "./TimeSincePosted";
import { LoggedInUserContext } from "../context/UserContext";

export default function CommentCard({ comment, handleDeleteComment }) {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [openToggle, setOpenToggle] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!comment || Object.keys(comment).length === 0) {
    return (
      <div className="comment-card">
        No comments have been posted, be the first!
      </div>
    );
  }
  const { author, votes, body, created_at, comment_id } = comment;

  const startDelete = (event) => {
    event.preventDefault();
    setIsDeleting(true);

    if (loggedInUser.username === author) {
      handleDeleteComment(comment_id)
        .then(() => {
          setIsDeleting(false);
        })
        .catch((err) => {
          console.error(err);
          setIsDeleting(false);
        });
    } else
      console.error(
        "You don't have permission to delete this comment, please send a bug report - you should not be able to see this..."
      );
  };

  const handleToggle = () => setOpenToggle(!openToggle);

  return (
    <div className="comment-card">
      <section className="header">
        <img
          className="avatar"
          src={`avatar placeholder img`}
          alt={`${author}'s avatar`}
        />
        <h4 className="author">{author}</h4>
        <p className="dot">•</p>
        <h4 className="votes"> {votes} votes</h4>
        <p className="dot">•</p>
        <TimeSincePosted created_at={created_at} />
        <button type="button" onClick={handleToggle} className="list-button">
          ⋮
        </button>
        {openToggle && loggedInUser.username === author && (
          <button
            type="button"
            onClick={startDelete}
            className="delete list-button"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting comment..." : "Delete comment"}
          </button>
        )}
      </section>
      <p className="body">{body}</p>
    </div>
  );
}
