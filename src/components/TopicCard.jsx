import { Link } from "react-router-dom";

export default function TopicCard({ slug, description }) {
  return (
    <div className="topic-card">
      <nav>
        <Link className="topic-card-link" to={`/topics/${slug}`}>
          <section className="topic-card-content">
            <h1 className="topic-card-title">{slug}</h1>
            <h3 className="topic-card-description">{description}</h3>
          </section>
        </Link>
      </nav>
    </div>
  );
}
