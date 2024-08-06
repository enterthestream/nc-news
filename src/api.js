import axios from "axios";

const api = axios.create({
  baseURL: "https://scoop-scroller-nc-news.onrender.com/api",
});

const getAllArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

export { getAllArticles, getArticleById };
