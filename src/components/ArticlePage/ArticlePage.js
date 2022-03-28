import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { getArticleByID } from '../../utils/api';
import ArticleNav from '../ArticlePage/ArticleNav';
import ArticleBody from './ArticleBody';
import CommentCard from './CommentCard';

const ArticlePage = () => {

    const { article_id } = useParams();

    const [ article, setArticle ] = useState({});

    useEffect(() => {
        getArticleByID(article_id)
        .then((res) => {
            setArticle(res);
        });
    });


    return (
        <div className='articlePage'>
            <ArticleNav/>
            <ArticleBody />
            <CommentCard comment_count={article.comment_count}/>
        </div>
    );
};

export default ArticlePage;