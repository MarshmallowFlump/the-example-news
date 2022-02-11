import React, {useEffect, useState} from 'react';
import { getTopics } from '../../utils/api';

const ArticlesNav = (props) => {

    const { setTopicsQuery } = props;
    const [ topics, setTopics ] = useState([]);

    useEffect(() => {
        getTopics()
        .then((res) => {
            setTopics(res);
        });
    }, []);   

    return (
     
        <main className='articlesNav'> 
            <h1 className='topicsHeader'>Categories</h1>
                <div className='topicsGrid'>
                     {topics.map((topic) => {

                         return (
                                <button key={topic.slug} onClick={() => setTopicsQuery(topic.slug)} className='topicsButtons'>
                                        {topic.slug}
                                </button>
                                   
                                           
                        )
                    }
                )
            }

            <h2 className='allArticles'>
                <button onClick={() => setTopicsQuery('All Articles')}className='allArticlesButton'>
                    All Articles
                </button> 
                  </h2>
                </div>
        </main>
       
    )     
};


export default ArticlesNav;