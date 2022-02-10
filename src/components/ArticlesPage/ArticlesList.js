import React from 'react';

const ArticlesList = () => {
    return (
        <div className='articlesList'>
            
            <h2 className='title'>Title Goes here</h2>
            <h3 className='author'>Username</h3>
            <h3 className='date'>Date</h3>
                <div className='comments'>
                <button className='commentsButton'>
                    Comments (2)
                    
                </button>
                </div>
            
                <div className='votes'>
                <button className='upvote'>
                    👍
                    </button>
             
                <div className='votecount'>
                 4
                </div>
              
                <button className='downvote'>
                    👎
                    </button>

                </div>
            
        </div>
    );
};

export default ArticlesList;