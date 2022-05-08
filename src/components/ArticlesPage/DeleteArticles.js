import React, { useState } from 'react';

const DeleteArticles = (props) => {

    const { article_id, articles, setArticles } = props;

    const [ view, setView ] = useState('delete-button-view');

    const [ err, setErr ] = useState(null);

    const handleDeleteClick = (input) => {
        setView('are-you-sure');
    };

    const handleConfirmClick = (input) => {
        setView('article-deleted');
        let deletedArticleList = articles.filter((article)=> {
           return article.article_id !== article_id
        });
        setArticles(deletedArticleList);
        //deleting articles is hard-coded and not persistent as the example API does not have a delete article endpoint
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