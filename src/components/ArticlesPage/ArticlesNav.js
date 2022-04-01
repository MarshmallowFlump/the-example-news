import React from 'react';
import Dropdown from './Dropdown';

const ArticlesNav = (props) => {

    const { setTopic, setSort, setOrder } = props;

    return (
     
        <main className='articlesNav'> 

            <h1 className='topicsHeader'>

                Navigation

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