import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const ArticlesNav = (props) => {

    const { setTopic, setSort, setOrder, profile } = props;

    return (
     
        <main className='articlesNav'> 
            
            <div className='navOptions'>

                <h3 className='myLinks'>
                                
                                <Link to={`/users/${profile.username}`}>

                                    My Profile

                                </Link>

                                <Link to={`/users/${profile.username}/post-new-article`}>
                                
                                    Post New Article

                                </Link>

                            </h3>

                            <Dropdown 
                                    setTopic={setTopic}
                                    setSort={setSort}
                                    setOrder={setOrder}
                            />

            </div> 
                
        </main>
    );
};


export default ArticlesNav;