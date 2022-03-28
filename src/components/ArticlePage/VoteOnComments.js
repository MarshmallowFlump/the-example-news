import React from 'react';

const VoteOnComments = () => {
    return (
        <div>
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

export default VoteOnComments;