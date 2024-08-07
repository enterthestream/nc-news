import TimeSincePosted from "./TimeSincePosted";

export default function CommentCard({ comment, article, showPostedComment }) {
  if (!comment || Object.keys(comment).length === 0) {
    return (
      <div className="comment-card">
        No comments have been posted, be the first!
      </div>
    );
  }

  const { author, votes, body, created_at } = comment;

  return (
    <div className="comment-card">
      <div className="header">
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
      </div>

      <p className="body">{body}</p>
    </div>
  );
}
