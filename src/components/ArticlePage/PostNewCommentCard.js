import React, {useState, useContext, useRef } from 'react';
import { UserContext } from '../../contexts/User';
import { postNewComment } from '../../utils/api';

//need to know for comment posting/deleting process: current logged in user, current article id, comment body, current time

const PostNewCommentCard = () => {
   
    //this will be used to confirm current logged in user in order to post or delete comments under the correct user profile
    const { loggedInUser } = useContext(UserContext);

    const commentRef = useRef();
 
    const [ view, setView ] = useState('initial-view');

    const [ comment, setComment ] = useState('');
    
    const handleWriteCommentClick = (input) => {
        setView('write-comment-view')
    };

    const handleCancelClick = (input) => {
        setView('initial-view')
    };

    const handleTyping = (input) => {
        setComment(commentRef.current.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setComment(commentRef.current.value)
         //next: add in funtion to actually submit the comment to server
        alert('A comment was submitted: ' + comment);
        //next: add in error handling for unsuccessful attempts
        setSubmittedView();
    };

    const setSubmittedView = (input) => {
        setView('submitted-view')
    };

    const handleDeleteComment = (input) => {
        setView('deleted-comment-view')
        //next: add in function to actually delete the comment from the server
        //next: add in error handling for unsuccessful attempts
    };

    const handleOKClick = (input) => {
        setView('initial-view');
    };

    return (
        <div className='postCommentCard'>

            {view === 'initial-view' && (

               <div className='initialView'>

                    <button className='postCommentButton' onClick={handleWriteCommentClick}>

                        Leave a comment...

                    </button>

                </div> 
            )}

            {view === 'write-comment-view' && (

                <div className='writeCommentView'>

                    <form className='commentForm' onSubmit={handleCommentSubmit}>

                        <input onChange={handleTyping} type='text' ref={commentRef} placeholder='Write your comment here...' required
                        />

                            <button className='submitComment' type='submit'>

                                Submit

                            </button>

                    </form>

                        <button className='cancelButton' onClick={handleCancelClick}>

                            Cancel

                        </button>

                </div>
            )}

            {view === 'submitted-view' && (

                <div className='submittedView'>

                    Thank you for posting a comment. If you have changed your mind, you can delete your comment.

                        <button className='deleteComment' onClick={handleDeleteComment}>

                            Delete Comment

                            </button>
                </div>
            )}

            {view === 'deleted-comment-view' && (

                <div className='deletedCommentView'>

                    Your comment has been deleted.

                        <button className='okButton' onClick={handleOKClick}>

                            OK

                        </button>
                </div>
            )}
            
        </div>
    );
};

export default PostNewCommentCard;