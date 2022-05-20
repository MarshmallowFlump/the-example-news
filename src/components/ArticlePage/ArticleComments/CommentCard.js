import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleComments } from '../../../utils/api';
import Dropdown from './Dropdown';
import CommentsList from './CommentsList';
import LoadingSpin from '../../reuseable/LoadingSpin';

const CommentCard = (props) => {

    const { comment_count } = props;

    const { username } = props;

    const { article_id } = useParams();

    const [ comments, setComments ] = React.useState([]);

    const [ order, setOrder ] = React.useState('desc');

    const [ sort, setSort ] = React.useState(null);
    
    const [ loading, setLoading ] = React.useState(true);

    React.useEffect(() => {
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