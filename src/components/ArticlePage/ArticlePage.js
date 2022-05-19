import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { getArticleByID } from '../../utils/api';
import Home from '../reuseable/Home';
import ArticleBody from './ArticleBody';
import CommentCard from './ArticleComments/CommentCard';
import InteractiveArticleCard from './InteractiveArticleCard';


const ArticlePage = (props) => {

    const { username } = props.profile;

    const { article_id } = useParams();

    const [ article, setArticle ] = useState({});

    useEffect(() => {
        getArticleByID(article_id)
        .then((res) => {
            setArticle(res);
        });
    }, [article_id]);

    return (

        <div className='articlePage'>

            <Home/>

            <ArticleBody article={article} date={article.created_at} />

            <InteractiveArticleCard article={article} username={username}/>

            <CommentCard comment_count={article.comment_count} username={username} />
            
        </div>
    );
};

export default ArticlePage;