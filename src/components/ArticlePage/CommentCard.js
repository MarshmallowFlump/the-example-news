import React from 'react';
import CommentsList from './CommentsList';

const CommentCard = () => {
    return (
        <div className='commentCard'>
            <h1>Comments (4)</h1>
            <CommentsList />
        </div>
    );
};

export default CommentCard;