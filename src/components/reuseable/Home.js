import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (

        <div className='articleNav'>

            <Link to={`/`}>

                <button className='homeButton'>

                    <h1>

                        Home

                    </h1>

                </button>

            </Link>
            
        </div>
    );
};

export default Home;