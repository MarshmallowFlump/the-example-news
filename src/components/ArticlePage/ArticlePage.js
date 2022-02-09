import React from 'react';
import ArticleNav from '../ArticlePage/ArticleNav';
import ArticleBody from './ArticleBody';
import CommentCard from './CommentCard';

const ArticlePage = () => {
    return (
        <div className='articlePage'>
            <ArticleNav/>
            <ArticleBody />
            <CommentCard />
        </div>
    );
};

export default ArticlePage;