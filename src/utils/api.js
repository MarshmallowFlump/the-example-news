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

export const getArticles = (topic, sort_by, order) => {

    let baseURL = `/articles`

    if (topic && !sort_by && !order) {
        baseURL += `?topic=${topic}`
    }
    else if (!topic && sort_by && !order) {
        baseURL += `?sort_by=${sort_by}`
    } 
    else if (!topic && !sort_by && order) {
        baseURL += `?order=${order}`
    }
    else if (topic && sort_by && order) {
        baseURL += `?topic=${topic}&sort_by=${sort_by}&order=${order}`
    } 
    else if (topic && sort_by && !order) {
        baseURL += `?topic=${topic}&sort_by=${sort_by}`;
    }
    else if (topic && !sort_by && order) {
        baseURL += `?topic=${topic}&order=${order}`;
    }
    else if (!topic && sort_by && order) {
        baseURL += `?sort_by=${sort_by}&order=${order}`;
    };

    return newsApi.get(baseURL).then((res) => {
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

export const patchArticleVotes = (article_id, vote) => {
    return newsApi.patch(`/articles/${article_id}`, { inc_votes: vote }).then((res) => {
        return res.data.article.votes;
    });
};

export const getArticleComments = (article_id, sort_by, order) => {

    let baseURL = `/articles/${article_id}/comments`

    if (sort_by && order) {
        baseURL += `?sort_by=${sort_by}&order=${order}`;
    }
    else if (sort_by && !order) {
        baseURL += `?sort_by=${sort_by}`;
    } 
    else if (!sort_by && order) {
        baseURL += `?order=${order}`;
    };

    return newsApi.get(baseURL)
    .then((res) => {
        return res.data.comments;
    });
};

export const patchArticleCommentByID = (comment_id, vote) => {
    return newsApi.patch(`/comments/${comment_id}`, { inc_votes: vote }).then((res) => {
        return res.data.comment;
    });
};

export const postNewComment = (article_id, loggedInUser, commentBody) => {
    let postObject = { body: commentBody, username: loggedInUser };
    return newsApi.post(`/articles/${article_id}/comments`, postObject).then((res) => {
        return res.data;
    });
};

export const deleteComment = (comment_id) => {
    return newsApi.delete( `/comments/${comment_id}`)
    .then((res) => {
        return res.data;
    });
};

export const getUser = (username) => {
    return newsApi.get(`/users/${username}`)
    .then((res) => {
        return res.data;
    });
};