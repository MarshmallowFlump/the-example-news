import React from 'react';
import PostNewCommentCard from './ArticleComments/PostNewCommentCard';
import VoteOnArticle from './VoteOnArticle';

const InteractiveArticleCard = (props) => {

    const { article, username } = props;

        return (

        <div className='interactiveCard'>

            <VoteOnArticle article={article}/>

            <PostNewCommentCard username={username} />
            
        </div>
    );
};

export default InteractiveArticleCard;