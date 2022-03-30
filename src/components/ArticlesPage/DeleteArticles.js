import React, { useState } from 'react';
import { deleteArticle } from '../../utils/api';

const DeleteArticles = (props) => {

    const { article_id } = props;

    const [ view, setView ] = useState('delete-button-view');

    const [ err, setErr ] = useState(null);

    const handleDeleteClick = (input) => {
        setView('are-you-sure');
    };

    const handleConfirmClick = (input) => {
        setView('article-deleted');
        //cannot use this function as the example API does not have a delete article endpoint, however, this is how it would be done if it did.
        //deleteArticle(article_id)
       // .catch((err) => {
            //setErr('Something went wrong and your article could not be deleted. Please try again later.');
        //});
    };

    const handleCancelClick = (input) => {
        setView('delete-button-view');
    };

    if (err) return <p>{err}</p>
    return (
        <div className='deleteArticleProcess'>

            {view === 'delete-button-view' && (
                
                <div className='deleteArticleView'>

                <button className='deleteArticleButton' onClick={handleDeleteClick}>
                        
                    Delete

                </button>

                </div>
            )}

            {view === 'are-you-sure' && (

                <div className='areYouSureArticle'>

                    <h2>

                        Are you sure you want to delete this article?

                    </h2>

                    <button className="areYouSureButtonArticle" onClick={handleConfirmClick}>
                        
                        Confirm

                    </button>

                    <button className="cancelDeleteButtonArticle" onClick={handleCancelClick}>

                        Cancel 

                    </button>

                </div>
            )}

            {view === 'article-deleted' && (

                <div className='articleDeleted'>

                    <h2>

                        Your article has been deleted.

                    </h2>

                </div>
            )}
            
        </div>
    );
};

export default DeleteArticles;