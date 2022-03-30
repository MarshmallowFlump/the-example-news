import React from 'react';
import PostNewCommentCard from './PostNewCommentCard';
import VoteOnArticle from './VoteOnArticle';

const InteractiveArticleCard = () => {
    return (
        <div>
            <VoteOnArticle />
            <PostNewCommentCard />
        </div>
    );
};

export default InteractiveArticleCard;