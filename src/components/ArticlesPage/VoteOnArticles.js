import React, { useEffect, useState } from 'react';
import { getArticleByID, patchArticleVotes } from '../../utils/api';

const VoteOnArticles = (props) => {
    
    const { article_id } = props;
    
    const [ votes, setVotes ] = useState(0);
    const [err, setErr] = useState(null);

    useEffect(() => {
        getArticleByID(article_id)
        .then((article) => {
            setVotes(article.votes);
        });
    }, []);

const handleUpVoteClick = () => {
    setVotes((currCount) => currCount +1);
    setErr(null);
    patchArticleVotes(article_id, 1).catch((err) => {
        setVotes((currCount) => currCount -1);
        setErr('Something went wrong, please try again.');
    });
};

const handleDownVoteClick = () => {
    setVotes((currCount) => currCount -1);
    setErr(null);
    patchArticleVotes(article_id, -1).catch((err) => {
        setVotes((currCount) => currCount +1);
        setErr('Something went wrong, please try again.');
    });
};

if (err) return <p>{err}</p>;

    return (
        <div>
              <div className='votes'>
                                    <button className='upvote' onClick={handleUpVoteClick}>
                                        👍
                                    </button>
                                         
                                    <div className='votecount'>
                                        {votes}
                                    </div>
          
                                    <button className='downvote' onClick={handleDownVoteClick}>
                                        👎
                                    </button>
                                </div>
            
        </div>
    );
};

export default VoteOnArticles;