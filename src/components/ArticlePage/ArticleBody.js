import React from 'react';

const ArticleBody = (props) => {

    const { article } = props;
  
    return (

        <div className='articleBody'>
            <h1 className='articleTitle'>
               {article.title}
            </h1>

            <h1 className='articleUsername'>
                {article.author}
            </h1>

            <h1 className='articleDate'>
                {article.created_at}
            </h1>

            <p className='articleBodyText'>
                {article.body}
            </p>
        </div>
    );
};

export default ArticleBody;