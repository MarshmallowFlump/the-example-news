import React from 'react';
import { Link } from 'react-router-dom';
import DeleteMyArticles from './DeleteMyArticles';

const UserArticlesList = (props) => {


    const { myArticles, setMyArticles, loggedInUser } = props;

    return (
        <div>
             <ul className='myArticlesList'>

                {myArticles.map((article) => {

                    return (

                        <li key={article.article_id} className='myArticleListItems'>

                            <Link to={`/articles/${article.article_id}`}>

                                <h2 className='title'>
                                    {article.title}
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