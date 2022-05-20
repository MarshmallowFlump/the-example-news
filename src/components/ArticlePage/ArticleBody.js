import React from 'react';
import Date from '../reuseable/Date';

const ArticleBody = (props) => {

    const { article } = props;
  
    return (

        <div className='articlePageBody'>
            <h1 className='articlePageTitle'>
               {article.title}
            </h1>

            <h1 className='articlePageUsername'>
                {article.author}
            </h1>

            <h1 className='articlePageDate'>
                <Date date={article.created_at} />
            </h1>

            <p className='articlePageBodyText'>
                {article.body}
            </p>
        </div>
    );
};

export default ArticleBody;