import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { getArticleComments } from '../../../utils/api';
import Dropdown from './Dropdown';
import CommentsList from './CommentsList';
import LoadingSpin from '../../reuseable/LoadingSpin';

const CommentCard = (props) => {

    const { comment_count } = props;

    const { username } = props;

    const { article_id } = useParams();

    const [ comments, setComments ] = useState([]);

    const [ order, setOrder ] = useState('desc');

    const [ sort, setSort ] = useState(null);
    
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getArticleComments(article_id, sort, order)
        .then((res) => {
            setComments(res);
            setLoading(false);
        });
    }, [comments, article_id, sort, order]);

  
    return loading ? (<LoadingSpin />) : (
        <div className='commentCard'>
            <h1>Comments ({comment_count})</h1>
            <Dropdown setSort={setSort}  setOrder={setOrder}/>
            <CommentsList  comments={comments} username={username} />
        </div>
    );
};

export default CommentCard;