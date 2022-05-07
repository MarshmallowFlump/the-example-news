import React from 'react';
import VoteOnComments from './VoteOnComments';
import DeleteComment from './DeleteComment';

const CommentsList = (props) => {

    const { comments, username } = props;

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
                        
                        {username === comment.author && (
                        
                        <DeleteComment comment_id={comment.comment_id}/>

                        )}
                        
                        </li>
                    )
                })}  
            </ul>
        </main>
    );
};

export default CommentsList;