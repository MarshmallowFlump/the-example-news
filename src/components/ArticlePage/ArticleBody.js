import React, { useEffect, useState } from 'react';
import ArticleVoteBlock from './ArticleVoteBlock';
import { useParams } from 'react-router-dom';
import { getArticleByID } from '../../utils/api';

const ArticleBody = () => {
    const { article_id } = useParams();
    const [ article, setArticle ] = useState([]);

    useEffect(() => {
        getArticleByID(article_id)
        .then((res) => {
            setArticle(res);
        });
    }, []);

    return (

        <div className='articleBody'>
            <h1 className='articleTitle'>
               {article.title}
            </h1>

            <h1 className='articleUsername'>
                {article.author}
            </h1>

            <h1 className='articleDate'>
                {article.created_at}
            </h1>

            <p className='articleBodyText'>
                {article.body}
            </p>
        <ArticleVoteBlock />
        </div>
    );
};

export default ArticleBody;