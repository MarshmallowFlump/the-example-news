import React from 'react';
import spinner from  '../reuseable/Spinner.gif'

const LoadingSpin = () => {
    return (
        <div className='loadingSpinner'>
            <img src={spinner}></img>
        </div>
    );
};

export default LoadingSpin;