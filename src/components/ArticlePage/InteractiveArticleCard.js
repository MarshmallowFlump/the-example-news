import React from 'react';
import PostNewCommentCard from './PostNewCommentCard';
import VoteOnArticle from './VoteOnArticle';

const InteractiveArticleCard = (props) => {

    const { article } = props;

    return (

        <div>

            <VoteOnArticle article={article}/>

            <PostNewCommentCard />
            
        </div>
    );
};

export default InteractiveArticleCard;