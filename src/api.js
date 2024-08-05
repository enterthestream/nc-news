import axios from "axios";

const api = axios.create({
  baseURL: "https://scoop-scroller-nc-news.onrender.com/api",
});

const getAllArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export { getAllArticles };
