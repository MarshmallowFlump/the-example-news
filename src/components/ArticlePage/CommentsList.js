import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleComments } from '../../utils/api';
import VoteOnComments from './VoteOnComments';

const CommentsList = () => {

    const { article_id } = useParams();

    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        getArticleComments(article_id)
        .then((res) => {
            setComments(res);
        });
    });

    return (
        <main className='commentsSection'>     
            <ul className='commentsList'>
                {comments.map((comment) => {
                    
                    return (
                        
                        <li key={comment.comment_id} className='commentsListItems'>

                        <h2 className='commentUsername'>
                            {comment.author}
                            </h2>
                    
                        <h2 className='commentDate'> 
                            {comment.created_at}  
                            </h2>
                
                        <p className='commentBody'>
                            {comment.body}
                            </p>
                        
                        <VoteOnComments comment_id={comment.comment_id} votes={comment.votes} />
                        
                        </li>
                    )
                })}  
            </ul>
        </main>
    );
};

export default CommentsList;