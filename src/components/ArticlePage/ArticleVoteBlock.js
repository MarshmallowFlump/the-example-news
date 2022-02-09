import React from 'react';

const ArticleVoteBlock = () => {
    return (
        <div className='articleVoteBlock'>
            <button className='upvoteArticle'>
            👍
            </button>
            <h2 className='articleVoteCount'>4</h2>
            <button className='downvoteArticle'> 
            👎
            </button>
        </div>
    );
};

export default ArticleVoteBlock;