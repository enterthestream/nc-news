import TopicCard from "./TopicCard";
import { getAllTopics } from "../api";
import { useEffect, useState } from "react";
import Header from "./Header";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTopics()
      .then(({ data: { topics } }) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Topics</h1>
      <section className="topics-list">
        {isLoading
          ? "loading"
          : topics.map((topic) => {
              return (
                <TopicCard
                  key={topic.slug}
                  slug={topic.slug}
                  description={topic.description}
                />
              );
            })}
      </section>
    </div>
  );
}
