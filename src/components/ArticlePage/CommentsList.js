import React from 'react';

const CommentsList = () => {
    return (
        <div className='commentsList'>
            <h2 className='commentUsername'>
                username
            </h2>
                
            <h2 className='commentDate'> 
                date  
            </h2>
               
            <p className='commentBody'>
                Tootsie roll cheesecake carrot cake biscuit carrot cake marzipan cookie pie dessert. Toffee candy cookie pastry cheesecake brownie lemon drops donut. Fruitcake jelly beans chupa chups chocolate croissant cake chocolate. Danish lollipop candy canes sugar plum cookie cake toffee topping.
            </p>

            <button className='commentUpvote'>
                👍
            </button>

            <h2 className='commentCount'>
                2
            </h2>
            <button className='commentDownvote'>
                👎
            </button>

        </div>
    );
};

export default CommentsList;