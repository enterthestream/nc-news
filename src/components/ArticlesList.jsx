import ArticleCard from "./ArticleCard";

export default function ArticlesList({ articles }) {
  return (
    <div className="articles">
      {articles.map((article) => {
        const {
          article_id,
          author,
          title,
          votes,
          article_img_url,
          comment_count,
          topic,
        } = article;
        return (
          <ArticleCard
            key={article_id}
            article_id={article_id}
            author={author}
            title={title}
            votes={votes}
            article_img_url={article_img_url}
            comment_count={comment_count}
            topic={topic}
            showBody={false}
          />
        );
      })}
    </div>
  );
}
