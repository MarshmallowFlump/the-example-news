import React from 'react';
import { Link } from 'react-router-dom';

const ArticleNav = () => {
    return (
        <div className='articleNav'>
            <Link to={`/`}>
            <button className='backButton'>
                <h1>Back</h1>
            </button>
            </Link>
        </div>
    );
};

export default ArticleNav;