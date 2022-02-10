import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://the-example-news.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics")
    .then((res) => {
        console.log(res.data.topics)
        return res.data.topics;
    });
};

/* export const getArticles = () => {
    newsApi.get("/articles").then((res) => {
        console.log(res.articles) 
        return res;
    })
} */