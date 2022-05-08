import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';


const ArticlesNav = (props) => {

    const { setTopic, setSort, setOrder, profile } = props;

    return (
     
        <main className='articlesNav'> 

            <h2>
                
                Welcome, {profile.name}!
            
            </h2>

            <h1>
                
                <Link to={`/users/${profile.username}`}>

                    My Profile

                </Link>

                <Link to={ `/my-articles/${profile.username}`}>

                    My Articles

                </Link>
            
                <Link to={`/z`}>

                    Post New Article

                </Link>

            </h1>

            <Dropdown 
                    setTopic={setTopic}
                    setSort={setSort}
                    setOrder={setOrder}
            />
                
        </main>
    );
};


export default ArticlesNav;