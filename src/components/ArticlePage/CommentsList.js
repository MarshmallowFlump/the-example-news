import React from 'react';
import VoteOnComments from './VoteOnComments';
import DeleteComment from './DeleteComment';
//import { useContext } from 'react';
//import { UserContext } from '../../contexts/User';

const CommentsList = (props) => {

    const comments = props.comments;

    //this will be used to confirm current logged in user in order to post or delete comments under the correct user profile
    //const { loggedInUser } = useContext(UserContext);

    //temporary hard-coded user for development purposes
    const hardCodedUser = 'jessjelly'

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
                        
                        {hardCodedUser === comment.author && (
                        
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