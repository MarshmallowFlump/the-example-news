import React, { useState } from "react";
import { deleteComment } from "../../../utils/api";

const DeleteComment = (props) => {

    const { comment_id } = props;

    const [ view, setView ] = useState('delete-button-view');

    const [ err, setErr ] = useState(null);

    const handleDeleteClick = (input) => {
        setView('are-you-sure');
    };

    const handleConfirmClick = (input) => {
        setView('comment-deleted');
        deleteComment(comment_id)
        .catch((err) => {
            setErr('Something went wrong and your comment could not be deleted. Please try again later.');
        });
    };

    const handleCancelClick = (input) => {
        setView('delete-button-view');
    };

    if (err) return <p>{err}</p>
    return (
        <div className="deleteCommentProcess">

            {view === 'delete-button-view' && (

                <div className="deleteButtonView">

                    <button className="deleteCommentButton" onClick={handleDeleteClick}>

                        Delete

                    </button>

                </div>
            )}

            {view === 'are-you-sure' && (

                <div className="areYouSureComment">

                    <h2>

                        Are you sure you want to delete this comment?

                    </h2>

                    <button className="areYouSureButtonComment" onClick={handleConfirmClick}>
                        
                        Confirm

                    </button>

                    <button className="cancelDeleteButtonComment" onClick={handleCancelClick}>

                        Cancel 

                    </button>
                
                </div>
            )}

            {view === 'comment-deleted' && (

                <div className="commentDeleted"> 

                    <h2>

                        Your comment has been deleted.

                    </h2>
                    
                </div>
            )}
            
        </div>
    )
}; 

export default DeleteComment;