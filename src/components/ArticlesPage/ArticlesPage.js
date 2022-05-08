import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getArticles } from '../../utils/api';
import ArticlesList from './ArticlesList';
import ArticlesNav from './ArticlesNav';

const ArticlesPage = (props) => {

    const user = props.profile.username;

    const profile = props.profile;

    const [ articles, setArticles ] = useState([]);

    const [ sort, setSort ] = useState(null);
    
    const [ order, setOrder ] = useState(null);

    const [ topic, setTopic ] = useState(null);
    
    useEffect(() => {
        getArticles(topic, sort, order)
            .then((retrievedArticles) => {
                setArticles(retrievedArticles);
            });
    }, [topic, sort, order]);
    
    return (

        <div className='articlesPage'>

            <ArticlesNav setTopic={setTopic} setSort={setSort} setOrder={setOrder} user={user} profile={profile}/>

            <ArticlesList setArticles={setArticles} articles={articles} sort={sort} order={order} topic={topic} user={user}/>
            
        </div>
    );
};

export default ArticlesPage;