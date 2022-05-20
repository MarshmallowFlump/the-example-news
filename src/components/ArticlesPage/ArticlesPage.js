import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getArticles } from '../../utils/api';
import ArticlesList from './ArticlesList';
import ArticlesNav from './ArticlesNav';
import LoadingSpin from '../reuseable/LoadingSpin';

const ArticlesPage = (props) => {

    const [ loading, setLoading ] = useState(true);

    const user = props.profile.username;

    const profile = props.profile;

    const [ articles, setArticles ] = useState([]);

    const [ sort, setSort ] = useState(null);
    
    const [ order, setOrder ] = useState(null);

    const [ topic, setTopic ] = useState(null);
    
    React.useEffect(() => {
        getArticles(topic, sort, order)
            .then((retrievedArticles) => {
                setArticles(retrievedArticles);
                setLoading(false);
            });
    }, [topic, sort, order]);
    

    return loading ? (<LoadingSpin />) : (

        <div className='articlesPage'>

            <ArticlesNav setTopic={setTopic} setSort={setSort} setOrder={setOrder} user={user} profile={profile}/>

            <ArticlesList setArticles={setArticles} articles={articles} sort={sort} order={order} topic={topic} user={user}/>
            
        </div>
    );
};

export default ArticlesPage;