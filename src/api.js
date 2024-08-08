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

const getCommentsByArticleId = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

const updateArticleById = (article_id, inc_votes) => {
  return api.patch(`/articles/${article_id}`, { inc_votes });
};

const postComment = (article_id, username, body) => {
  return api.post(`/articles/${article_id}/comments`, { username, body });
};

const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export {
  getAllArticles,
  getArticleById,
  getCommentsByArticleId,
  updateArticleById,
  postComment,
  deleteComment,
};
