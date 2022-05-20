import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../../utils/api';
import Home from '../reuseable/Home';
import UserArticlesList from './UserArticlesList';
import LoadingSpin from '../reuseable/LoadingSpin';

const UserArticles = (props) => {

    const loggedInUser = props.profile.username;

    const { user_id } = useParams();

    const [ myArticles, setMyArticles ] = useState([]);

    const [ sort, setSort ] = useState(null);
    
    const [ order, setOrder ] = useState(null);

    const [ topic, setTopic ] = useState(null);

    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getArticles(topic, sort, order)
        .then((retrievedArticles) => {
            let myRetrievedArticles = retrievedArticles.filter((article) => {
                return article.author === user_id;
            });
            setMyArticles(myRetrievedArticles);
            setLoading(false);
        });
    }, [topic, sort, order]);

    return loading ? (<LoadingSpin />) : (
        
        <main className='userArticlesPage'>

            <Home />

            <div className='userArticlesSection'>

            <h1 className='userArticlesHeader'>
                
                Articles by User: {user_id}
            
            </h1>

            <UserArticlesList myArticles={myArticles} setMyArticles={setMyArticles} loggedInUser={loggedInUser}/>
                     
            </div>

        </main>
    );
};

export default UserArticles;