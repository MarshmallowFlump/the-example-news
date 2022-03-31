import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/User';
import { getArticles, getArticlesByTopics } from '../../utils/api';
import DeleteArticles from './DeleteArticles';
import VoteOnArticles from './VoteOnArticles';


const ArticlesList = (props) => {

    const [ articles, setArticles ] = useState([]);
    const { topicsQuery } = props;

    //this will be used to confirm current logged in user in order to post or delete comments under the correct user profile
    const { loggedInUser } = useContext(UserContext);
    
    //temporary hard-coded user for development purposes
    const hardCodedUser = 'jessjelly'

    useEffect(() => {
        if (topicsQuery === 'All Articles') {
            getArticles()
        .then((res) => {
            setArticles(res);
        });
        } else {
            getArticles(null, null,topicsQuery) 
            .then((res) => {
                setArticles(res);
            });
        }
       
     
    }, [topicsQuery]);
    

    return (
     
        <main className='articlesSection'>
            <ul className='articlesList'>
                {articles.map((article) => {
              
                    return (
                        
                        <li key={article.article_id} className='articleListItems'> 
                            
                            <Link to={`/articles/${article.article_id}`}>
                                <h2 className='title'>{article.title}
                                    </h2>
                     
                            </Link>
                            
                         
                            <h3 className='author'>
                                {article.author}
                                </h3>

                            <h3 className='date'>
                                {article.created_at}
                                </h3>

                            <h3 className='comments'>
                                {article.comment_count} comments
                                </h3>

                            <VoteOnArticles article_id={article.article_id} current_votes={article.votes}/>

                            {hardCodedUser === article.author && (

                                <DeleteArticles article_id={article.article_id}/>

                            )}

                        </li>
                        )
                    })
                }
            </ul>
        </main>
        )           
    }
            
export default ArticlesList;