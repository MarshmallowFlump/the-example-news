import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByID, patchArticleVotes } from '../../utils/api';

const VoteOnArticle = () => {

    const { article_id } = useParams();

    const [ votes, setVotes ] = useState(0);
    const [ err, setErr ] = useState(null);

    useEffect(() => {
        getArticleByID(article_id)
        .then((article) => {
            setVotes(article.votes)
        });
    }, []);

    const handleUpVoteClick = () => {
        setVotes((currCount) => currCount +1);
        setErr(null);
        patchArticleVotes(article_id)
        .catch((err) => {
            setVotes((currCount) => currCount -1);
            setErr('Something went wrong, please try again.');
        });
    };

    const handleDownVoteClick = () => {
        setVotes((currCount) => currCount -1);
        setErr(null);
        patchArticleVotes(article_id)
        .catch((err) => {
            setVotes((currCount) => currCount +1);
            setErr('Something went wrong, please try again.');
        });
    };

    if (err) return <p>{err}</p>;

    return (
        <div> 
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
        </div>
    );
};

export default VoteOnArticle;