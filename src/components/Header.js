import React from 'react';

const Header = (props) => {

    const { name } = props;

    return (
        <div className='headerBox'>

            <h1 className='header'>

                The Example News
        
            </h1>

            <h4 className='welcome'>
                
               Welcome, {name}!
            
            </h4>

        </div>
        
    );
};

export default Header;