import React from 'react';
import ArticlesList from './ArticlesList';

const ArticlesCard = (props) => {

    const { topicsQuery } = props;
    return (
        <div className='articlesCard'>
            <h1>{topicsQuery[0].toUpperCase() + topicsQuery.slice(1)}</h1>
            <ArticlesList topicsQuery={topicsQuery}/>
        </div>
    );
};

export default ArticlesCard;