import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://the-example-news.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics")
    .then((res) => {
        return res.data.topics;
    });
};

export const getArticles = () => {
    return newsApi.get("/articles").then((res) => {
        return res.data.articles;
    });
};

export const getArticlesByTopics = (topic) => {
    return newsApi.get(`/articles?topic=${topic}`).then((res) => {
        return res.data.articles;
    });
};

export const getArticleByID = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;
    });
};

export const patchArticleVotes = (article_id) => {
    return newsApi.patch(`/articles/${article_id}`, { inc_votes: 1 }).then((res) => {
        return res.data.article.votes;
    });
};

export const getArticleComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments;
    });
};

export const patchArticleCommentByID = (comment_id) => {
    return newsApi.patch(`/comments/${comment_id}`, { inc_votes: 1 }).then((res) => {
        return res.data.comment;
    });
};