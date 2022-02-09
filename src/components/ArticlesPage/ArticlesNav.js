import React from 'react';

const ArticlesNav = () => {
    return (
        <div className='articlesNav'>
            <h1 className='categories'>Categories</h1>
            <h2 className='coding'>
                <button className='codingButton'>
                    Coding

                </button>
                </h2>

            <h2 className='football'>
                <button className='footballButton'>
                    Football

                </button>
                </h2>

            <h2 className='cooking'>
                <button className='cookingButton'>
                    Cooking

                </button>
                </h2>
            
            <h2 className='allArticles'>
                <button className='allArticlesButton'>
                    All Articles
                </button>


            </h2>
        </div>
    );
};

export default ArticlesNav;