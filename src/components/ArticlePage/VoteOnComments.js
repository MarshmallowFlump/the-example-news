import React, { useEffect, useState } from 'react';
import { patchArticleCommentByID } from '../../utils/api';

const VoteOnComments = (props) => {

    const { votes, comment_id } = props;
    
    const [ commentVotes, setCommentVotes ] = useState(0);
    const [ err, setErr ] = useState(null);

    useEffect(() => {
        setCommentVotes(votes);
    }, []);

    const handleUpVoteClick = () => {
        setCommentVotes((currCount) => currCount +1);
        setErr(null);
        patchArticleCommentByID(comment_id, 1)
        .catch((err) => {
            setCommentVotes((currCount) => currCount -1);
            setErr('Something went wrong, please try again.');
        });
    };

    const handleDownVoteClick = () => {
        setCommentVotes((currCount) => currCount -1);
        setErr(null);
        patchArticleCommentByID(comment_id, -1)
        .catch((err) => {
            setCommentVotes((currCount) => currCount +1);
            setErr('Something went wrong, please try again.');
        });
    };

    if (err) return <p>{err}</p>;

    return (
        <div className='voteOnComment'>
            <button className='commentUpvote' onClick={handleUpVoteClick}>
                👍
            </button>

            <h2 className='commentCount'>
                {commentVotes}
            </h2>
            <button className='commentDownvote' onClick={handleDownVoteClick}>
                👎
            </button>

        </div>
    );
};

export default VoteOnComments;