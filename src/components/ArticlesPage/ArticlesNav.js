import React, {useEffect, useState} from 'react';
import { getTopics } from '../../utils/api';

const ArticlesNav = () => {

    const [ topics, setTopics ] = useState([]);

    useEffect(() => {
        getTopics()
        .then((res) => {
            setTopics(res);
        });
    }, []);   
  // console.log(topics)
    return (
     
        <main className='articlesNav'> 
            <h1 className='topicsHeader'>Categories</h1>
                <ul className='topicsGrid'>
                     {topics.map((topic) => {

                         return (
                                <button className='topicsButtons'>
                                        {topic.slug}
                                </button>
                                           
                        )
                    }
                )
            }

            <h2 className='allArticles'>
                <button className='allArticlesButton'>
                    All Articles
                </button> 
                  </h2>
                </ul>
        </main>
       
    )     
};


export default ArticlesNav;