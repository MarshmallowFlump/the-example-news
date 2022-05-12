import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../../utils/api';
import Home from '../reuseable/Home';
import UserArticlesList from './UserArticlesList';

const UserArticles = (props) => {

    const loggedInUser = props.profile.username;

    const { user_id } = useParams();

    const [ myArticles, setMyArticles ] = useState([]);

    const [ sort, setSort ] = useState(null);
    
    const [ order, setOrder ] = useState(null);

    const [ topic, setTopic ] = useState(null);

    useEffect(() => {
        getArticles(topic, sort, order)
        .then((retrievedArticles) => {
            let myRetrievedArticles = retrievedArticles.filter((article) => {
                return article.author === user_id;
            });
            setMyArticles(myRetrievedArticles);
        });
    }, [topic, sort, order]);

    return (
        
        <div>

            <Home />

            <h1>
                
                Articles by User: {user_id}
            
            </h1>

            <UserArticlesList myArticles={myArticles} setMyArticles={setMyArticles} loggedInUser={loggedInUser}/>
                     
        </div>
    );
};

export default UserArticles;