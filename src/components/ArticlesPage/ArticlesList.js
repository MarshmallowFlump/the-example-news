import React from 'react';
import { Link } from 'react-router-dom';
import DeleteArticles from './DeleteArticles';
import VoteOnArticles from './VoteOnArticles';
import Date from '../reuseable/Date';


const ArticlesList = (props) => {

    const { articles, user, setArticles } = props;

    return (
                 
            <ul className='articlesList'>

                {articles.map((article) => {
              
                    return (
                        
                        <li key={article.article_id} className='articleListItems'> 
                            
                            <Link to={`/articles/${article.article_id}`}>

                                <h2 className="articleTitle">
                                    
                                    {article.title}

                                </h2>
                     
                            </Link>
                            
                            <Link to={`/users/${article.author}`}>

                                <h3 className='articleAuthor'>
                                                                                    
                                    {article.author}

                                </h3>

                            </Link>

                            <h3 className='articleDate'>

                                <Date date={article.created_at} />

                            </h3>

                            <Link to={`/articles/${article.article_id}`}>

                                <h3 className='articleComments'>

                                    {article.comment_count} comments
                                                                                                
                                </h3>          

                            </Link>      

                            <VoteOnArticles article_id={article.article_id} current_votes={article.votes}/>

                            {user === article.author && (
                            
                            <div className='articlesDelete'>

                                <DeleteArticles article_id={article.article_id} articles={articles} setArticles={setArticles}/>
                            
                            </div>

                            )}
                        
                        </li>

                    )
                })
            }   
        
        </ul>
    )           
};
            
export default ArticlesList;