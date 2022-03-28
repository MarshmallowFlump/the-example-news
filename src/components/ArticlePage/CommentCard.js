import React from 'react';
import CommentsList from './CommentsList';

const CommentCard = (props) => {

    const { comment_count } = props;
  
    return (
        <div className='commentCard'>
            <h1>Comments ({comment_count})</h1>
            <CommentsList />
        </div>
    );
};

export default CommentCard;