import React, { useEffect } from 'react';
import { patchArticleCommentByID } from '../../../utils/api';

const VoteOnComments = (props) => {

    const { votes, comment_id } = props;
    
    const [ commentVotes, setCommentVotes ] = React.useState(0);
    const [ err, setErr ] = React.useState(null);
    const [ upVoted, setUpVoted ] = React.useState(false);
    const [ downVoted, setDownVoted ] = React.useState(false);

    useEffect(() => {
        setCommentVotes(votes);
    }, [votes]);

    const handleUpVoteClick = () => {
        if (upVoted === false) {
            setUpVoted(true);
            setDownVoted(false);
            setCommentVotes((currCount) => currCount +1);
                setErr(null);
                patchArticleCommentByID(comment_id, 1).catch((err) => {
                    setUpVoted(false);
                    setCommentVotes((currCount) => currCount -1);
                    setErr('Something went wrong, please try again.');
            });
    
        } else if (upVoted === true && downVoted === false) {
            alert('You have already upvoted this comment.')
        } else if (upVoted === true && downVoted === true) {
            setUpVoted(true);
            setDownVoted(false);
            setCommentVotes((currCount) => currCount +1);
            setErr(null);
            patchArticleCommentByID(comment_id, 1).catch((err) => {   
                setUpVoted(false);
                setCommentVotes((currCount) => currCount -1);
                setErr('Something went wrong, please try again.');
            });
        };
    };

    const handleDownVoteClick = () => {
        if (downVoted === false) {
            setDownVoted(true);
            setUpVoted(false);
            setCommentVotes((currCount) => currCount -1);
                setErr(null);
                patchArticleCommentByID(comment_id, -1).catch((err) => {
                    setDownVoted(false);
                    setCommentVotes((currCount) => currCount +1);
                    setErr('Something went wrong, please try again.');
            });
        } else if (downVoted === true && upVoted === false) {
            alert('You have already downvoted this comment.')
        } else if (downVoted === true && upVoted === true) {
            setUpVoted(false);
            setDownVoted(true);
            setCommentVotes((currCount) => currCount -1);
            setErr(null);
                patchArticleCommentByID(comment_id, -1).catch((err) => {
                    setDownVoted(false);
                    setCommentVotes((currCount) => currCount +1);
                    setErr('Something went wrong, please try again.');
            });
        };
    };

    if (err) return <p>{err}</p>;

    return (
        <div className='voteOnComment'>
            
            <button className='commentUpvote' onClick={handleUpVoteClick}>
                👍
            </button>

                {commentVotes}
                
            <button className='commentDownvote' onClick={handleDownVoteClick}>
                👎
            </button>

        </div>
    );
};

export default VoteOnComments;