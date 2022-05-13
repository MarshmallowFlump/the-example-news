import React from 'react';
import ArticleBody from '../../ArticlePage/ArticleBody';

const SubmittedArticle = (props) => {

    const { article } = props;

    return (

        <div>

            <ArticleBody article={article}/>

        </div>
    );
};

export default SubmittedArticle;