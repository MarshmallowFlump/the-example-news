import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByID, patchArticleVotes } from '../../utils/api';

const VoteOnArticle = () => {

    const { article_id } = useParams();

    const [ votes, setVotes ] = useState(0);
    const [ err, setErr ] = useState(null);
    const [ upVoted, setUpVoted ] = useState(false);
    const [ downVoted, setDownVoted ] = useState(false);

    useEffect(() => {
        getArticleByID(article_id)
        .then((article) => {
            setVotes(article.votes)
        });
    }, []);

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
        <div className='voteOnArticle'>
                <button className='upvoteArticle' onClick={handleUpVoteClick}>
                    👍
                </button>

                <div className='votecount'>
                    {votes}
                        </div>
                <button className='downvoteArticle' onClick={handleDownVoteClick}> 
                    👎
                </button>
        </div>
    );
};

export default VoteOnArticle;