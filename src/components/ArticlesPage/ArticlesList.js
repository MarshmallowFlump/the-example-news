import React, { useEffect, useState } from 'react';
import { getArticles, getArticlesByTopics } from '../../utils/api';


const ArticlesList = (props) => {

    const [ articles, setArticles ] = useState([]);
    const { topicsQuery } = props;

    useEffect(() => {
        if (topicsQuery === 'All Articles') {
            getArticles()
        .then((res) => {
            setArticles(res);
        });
        } else {
            getArticlesByTopics(topicsQuery) 
            .then((res) => {
                setArticles(res);
            });
        }
       
     
    }, [topicsQuery]);
    

    return (
     
        <main className='articlesSection'>
            <ul className='articlesList'>
                {articles.map((article) => {

                    return(
                        <li key={article.article_id} className='articleListItems'> 
                            <h2 className='title'>{article.title}</h2>
                            <h3 className='author'>{article.author}</h3>
                            <h3 className='date'>{article.created_at}</h3>
                        
                                <div className='comments'>
                                    <button className='commentsButton'>
                                        Comments ({article.comment_count})
                                    </button>
                                </div>
        
                                <div className='votes'>
                                    <button className='upvote'>
                                        👍
                                    </button>
                                         
                                    <div className='votecount'>
                                        {article.votes}
                                    </div>
          
                                    <button className='downvote'>
                                        👎
                                    </button>
                                </div>
                        </li>
                        )
                    })
                }
            </ul>
        </main>

    )           
}
            
export default ArticlesList;