import React from 'react';

const Dropdown = (props) => {

    const { setSort, setOrder } = props;
    
    const handleSortClick = (event) => {
        setSort(event.target.value)
    };
    
    const handleOrderClick = (event) => {
        setOrder(event.target.value)
    };

    return (

        <div>

            Sort:

            <select className='select'
                    name='sortSelect'
                    id='orderSelect'
                    onChange={handleSortClick}
            >

                <option
                    defaultValue='created_at'
                    value='created_at'>

                    date

                </option>

                <option value='votes'>

                    votes

                </option>

            </select>

            Order:

            <select className='select'
                    name='orderSelect'
                    id='orderSelect'
                    onChange={handleOrderClick}
                    defaultValue='descending'
            >
                <option value='desc'>

                    descending

                </option>

                <option value='asc'>

                    ascending

                </option>

            </select>

        </div>
    );
};

export default Dropdown;