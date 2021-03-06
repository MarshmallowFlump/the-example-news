import React, { useState } from 'react';
import { patchArticleVotes } from '../../utils/api';

const VoteOnArticles = (props) => {
    
    const { article_id, current_votes  } = props;
    
    const [ votes, setVotes ] = useState(current_votes);
    const [err, setErr] = useState(null);
    const [ upVoted, setUpVoted ] = useState(false);
    const [ downVoted, setDownVoted ] = useState(false);

const handleUpVoteClick = () => {
    if (upVoted === false) {
        setUpVoted(true);
        setDownVoted(false);
        setVotes((currCount) => currCount +1);
            setErr(null);
            patchArticleVotes(article_id, 1).catch((err) => {
                setUpVoted(false);
                setVotes((currCount) => currCount -1);
                setErr('Something went wrong, please try again.');
        });

    } else if (upVoted === true && downVoted === false) {
        alert('You have already upvoted this article.')
    } else if (upVoted === true && downVoted === true) {
        setUpVoted(true);
        setDownVoted(false);
        setVotes((currCount) => currCount +1);
        setErr(null);
        patchArticleVotes(article_id, 1).catch((err) => {   
            setUpVoted(false);
            setVotes((currCount) => currCount -1);
            setErr('Something went wrong, please try again.');
        });
    };
};

const handleDownVoteClick = () => {
    if (downVoted === false) {
        setDownVoted(true);
        setUpVoted(false);
        setVotes((currCount) => currCount -1);
            setErr(null);
            patchArticleVotes(article_id, -1).catch((err) => {
                setDownVoted(false);
                setVotes((currCount) => currCount +1);
                setErr('Something went wrong, please try again.');
        });
    } else if (downVoted === true && upVoted === false) {
        alert('You have already downvoted this article.')
    } else if (downVoted === true && upVoted === true) {
        setUpVoted(false);
        setDownVoted(true);
        setVotes((currCount) => currCount -1);
        setErr(null);
            patchArticleVotes(article_id, -1).catch((err) => {
                setDownVoted(false);
                setVotes((currCount) => currCount +1);
                setErr('Something went wrong, please try again.');
        });
    };
};

if (err) return <p>{err}</p>;

    return (
        <main className='voting'>

                <button className='upvoteButton' onClick={handleUpVoteClick}>

                    ????
                                                                    
                </button>
                                                                                        
                <div className='votecount'>
                    
                    {votes}
                                                    
                </div>
                        
                <button className='downvoteButton' onClick={handleDownVoteClick}>

                    ????
                                                                    
                </button>
                                                                
        </main>
    );
};

export default VoteOnArticles;