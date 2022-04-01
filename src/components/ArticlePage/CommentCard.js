import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { getArticleComments } from '../../utils/api';
import Dropdown from '../ArticlePage/Dropdown';
import CommentsList from './CommentsList';

const CommentCard = (props) => {

    const { comment_count } = props;

    const { article_id } = useParams();

    const [ comments, setComments ] = useState([]);

    const [ order, setOrder ] = useState('desc');

    const [ sort, setSort ] = useState(null);

    useEffect(() => {
        getArticleComments(article_id, sort, order)
        .then((res) => {
            setComments(res);
        });
    }, [sort, order]);

  
    return (
        <div className='commentCard'>
            <h1>Comments ({comment_count})</h1>
            <Dropdown setSort={setSort}  setOrder={setOrder}/>
            <CommentsList  comments={comments}/>
        </div>
    );
};

export default CommentCard;