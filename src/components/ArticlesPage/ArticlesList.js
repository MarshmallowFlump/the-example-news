import React from 'react';

const ArticlesList = () => {
    return (
        <div className='articlesList'>
            
            <h2 className='title'>Title Goes here</h2>
            <h3 className='author'>Username</h3>
            <h3 className='date'>Date</h3>
            <h3 className='comments'>
                <button className='commentsButton'>
                    Comments (2)
                    
                    </button></h3>
            <h3 className='votes'>
              <p>
                  <button className='upvote'>👍</button>
                  </p>
             <h3 className='votecount'>4</h3>
              <p>
                  <button className='downvote'>👎</button>
                  </p>
                  
            </h3>
            
        </div>
    );
};

export default ArticlesList;