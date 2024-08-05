export default function ArticleCard({
  article_id,
  author,
  title,
  votes,
  article_img_url,
  comment_count,
  topic,
}) {
  return (
    <div className="article-card">
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
      <h4 className="votes">{votes} votes</h4>
      <p>{comment_count} comments</p>
    </div>
  );
}
