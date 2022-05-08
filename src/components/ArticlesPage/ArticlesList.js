import React from 'react';
import { Link } from 'react-router-dom';
import DeleteArticles from './DeleteArticles';
import VoteOnArticles from './VoteOnArticles';


const ArticlesList = (props) => {

    const { articles, user, setArticles } = props;

    return (
     
        <main className='articlesSection'>
            
            <ul className='articlesList'>

                {articles.map((article) => {
              
                    return (
                        
                        <li key={article.article_id} className='articleListItems'> 
                            
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

                            <VoteOnArticles  article_id={article.article_id} current_votes={article.votes}/>

                            {user === article.author && (

                            <DeleteArticles article_id={article.article_id} articles={articles} setArticles={setArticles}/>

                            )}

                        </li>

                        )
                    })
                }
            
            </ul>

        </main>

    )           
};
            
export default ArticlesList;