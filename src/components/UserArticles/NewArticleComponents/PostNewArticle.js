import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from '../../reuseable/Home';
import SubmittedArticle from './SubmittedArticle';

const PostNewArticle = () => {

    let today = new Date();

    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let timestamp = date + ' ' + time;

    const { user_id } = useParams();

    const [ title, setTitle ] = useState('');

    const [ body, setBody ] = useState('')
 
    const [ article, setArticle ] = useState({});

    const [ view, setView ] = useState('post-new-form');

    function handleTitleChange(event){
        setTitle(event.target.value)
    }

    function handleBodyChange(event){
        setBody(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        const newArticle = {author: user_id, title: title, body: body, created_at: timestamp }
        setArticle(newArticle)
        setView('submitted-view')
    }

    function handleClick(event){
        setView('submitted-article')
    }

    return (

        <div className='postNewArticle'>

            <Home />
            
            {view === 'post-new-form' && (

                <div className='postNewFormView'>

                <h1 className='newArticleTitle'>

                Post New Article

                </h1>

                <form className='postNewArticleForm' onSubmit={handleSubmit}>

                <label className='titleLabel'>

                    Title:

                    <input className='inputTitleBox' type="text" required value={this} onChange={handleTitleChange} />

                </label>

                <label className='bodyLabel'>

                    Body: 

                    <input className='inputBodyBox' type="text" required value={this} onChange={handleBodyChange} />

                </label>

                <input className='submitArticleButton' type="submit" value="Submit" />
                
            </form>

            </div>
            
            )}

            {view === 'submitted-view' && (

                <div className='submittedArticleView'>
                    
                    <h1 className='articleSubmittedText'>

                        Your article has been submitted.

                        <div className='viewArticleButtonSection'>

                        <button className='viewArticleButton' onClick={handleClick}>
                            
                            View Article
                            
                        </button>

                        </div>

                    </h1>

                </div>
            )}

            {view === 'submitted-article' && (

                <div className='submittedArticleView'>

                <SubmittedArticle article={article} />

                </div>
            )}

        </div>
    );
};

export default PostNewArticle;