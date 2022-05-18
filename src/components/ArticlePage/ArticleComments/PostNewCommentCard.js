import React, {useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { postNewComment } from '../../../utils/api';

const PostNewCommentCard = (props) => {

    const { username } = props;

    const { article_id } = useParams();

    const commentRef = useRef();
 
    const [ view, setView ] = useState('initial-view');

    const [ err, setErr] = useState(null);

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
        setView('submitted-view');      
        return postNewComment(article_id, username, comment)
        .catch((err) => {
        setErr('Something went wrong and your comment could not be posted. Please try again later.')
        });        
    };

    if (err) return <p>{err}</p>
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

                    <h2>Your comment has been submitted.</h2>
                    
                </div>
            )}         
        </div>
    );
};

export default PostNewCommentCard;