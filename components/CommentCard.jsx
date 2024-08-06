export default function CommentCard({ comment, article }) {
  if (!comment || Object.keys(comment).length === 0) {
    return (
      <div className="comment-card">
        No comments have been posted, be the first!
      </div>
    );
  }

  const { author, votes, body, created_at } = comment;

  const currentTime = new Date();

  const createdAt = new Date(created_at);
  const msTimeSinceComment = currentTime.getTime() - createdAt.getTime();

  const minutes = Math.floor(msTimeSinceComment / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const monthsApprox = Math.floor(days / 30);

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
        <p className="time-since-posted"> {monthsApprox} months ago</p>
      </div>

      <p className="body">{body}</p>
    </div>
  );
}
