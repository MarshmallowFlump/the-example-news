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
    })
}