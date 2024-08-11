import axios from "axios";

const api = axios.create({
  baseURL: "https://scoop-scroller-nc-news.onrender.com/api",
});

const getArticles = (topic, sortBy = "created_at", order = "desc") => {
  let url = `/articles`;

  const queryParams = new URLSearchParams();

  if (topic) {
    queryParams.append("topic", topic);
  }
  if (sortBy) {
    queryParams.append("sort_by", sortBy);
  }
  if (order) {
    queryParams.append("order", order);
  }

  if (queryParams.toString()) {
    url += `?${queryParams.toString()}`;
  }

  return api
    .get(url)
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch((err) => {
      console.error(err);
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

const getAllTopics = () => {
  return api.get(`/topics`);
};

const getArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`);
};

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  updateArticleById,
  postComment,
  deleteComment,
  getAllTopics,
  getArticlesByTopic,
};
