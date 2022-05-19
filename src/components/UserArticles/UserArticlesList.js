import React from 'react';
import { Link } from 'react-router-dom';
import DeleteMyArticles from './DeleteMyArticles';
import Date from '../reuseable/Date'

const UserArticlesList = (props) => {

    const { myArticles, setMyArticles, loggedInUser } = props;

    return (
        <div>
             <ul className='userArticlesList'>

                {myArticles.map((article) => {

                    return (

                        <li key={article.article_id} className='userArticlesListItems'>

                            <Link to={`/articles/${article.article_id}`}>

                                <h2 className='userArticlesTitle'>

                                    {article.title}

                                </h2>

                            </Link>

                            <h3 className='userArticlesDate'>

                                <Date date={article.created_at} />

                            </h3>

                            <h3 className='userArticlesComments'>

                                {article.comment_count} comments
                                
                            </h3>

                            {loggedInUser === article.author && (
                                 <DeleteMyArticles article_id={article.article_id} myArticles={myArticles} setMyArticles={setMyArticles}/>
                            )}
                           
                        </li>
                        
                    )
                })}

            </ul>  
            
        </div>
    );
};

export default UserArticlesList;