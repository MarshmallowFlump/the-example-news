import React, {useState} from 'react';
import ArticlesCard from './ArticlesCard';
import ArticlesNav from './ArticlesNav';

const ArticlesPage = () => {

    const [ topicsQuery, setTopicsQuery ] = useState('All Articles');
    
    return (
        <div className='articlesPage'>
            <ArticlesNav setTopicsQuery={setTopicsQuery}/>
            <ArticlesCard topicsQuery={topicsQuery}/>
            
        </div>
    );
};

export default ArticlesPage;