import React from 'react';
import ArticlesCard from './ArticlesCard';
import ArticlesNav from './ArticlesNav';

const ArticlesPage = () => {
    return (
        <div className='articlesPage'>
            <ArticlesNav />
            <ArticlesCard />
            
        </div>
    );
};

export default ArticlesPage;