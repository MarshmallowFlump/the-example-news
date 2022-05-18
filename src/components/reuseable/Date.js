import React from 'react';

const Date = (props) => {

    let rawDate = props.date;
    let americanDate = rawDate.slice(0,10)
    let britishDate = americanDate.slice(8) + ' - ' + americanDate.slice(5, 7) + " - " + americanDate.slice(0,4)
    
    let time = rawDate.slice(11, 16)
    

    return (

        <div className='date'>

               {britishDate} at {time}

        </div>
    );
};

export default Date;