import React, { useState, useEffect } from 'react';
import { getTopics } from '../../utils/api';

const Dropdown = (props) => {

    const { setTopic, setSort, setOrder } = props;

    const [ allTopics, setAllTopics ] = useState([]);

    useEffect(() => {
        getTopics()
        .then((result) => {
            setAllTopics(result);
        });
    }, []);

    const handleTopicClick = (event) => {
        if (event.target.value === 'all topics') {
            setTopic(null);
        } else {
            setTopic(event.target.value);
        };
    };

    const handleOrderClick = (event) => {
        setOrder(event.target.value);

    };

    const handleSortClick = (event) => {
        setSort(event.target.value);
    };
    
    return (

        <div>

            Filter:  

                <select className='select'
                        name='topicSelect'
                        id='topicSelect'
                        onChange={handleTopicClick}
                >
                
                    <option defaultValue="all topics">
                        
                        all topics
                    
                    </option>

                    {allTopics.map(topic => {

                        return (

                            <option key={topic.description} value={`${topic.slug}`}>

                                {topic.slug}
                                
                            </option>
                        );
                    })}
                
                </select>

            Sort:

                <select className='select' 
                        name='orderSelect'
                        id='orderSelect'
                        onChange={handleSortClick}
                >
                
                    <option defaultValue="created_at" value="created_at">

                        date

                    </option>

                    <option value="title">

                        title

                    </option>

                    <option value="votes">

                        votes

                    </option>

                    <option value="comment_count">

                        comment count

                    </option>
                                
                </select>

            Order:

                <select className='select'
                        name='orderSelect'
                        id='orderSelect'
                        onChange={handleOrderClick}
                        defaultValue="descending">

                    <option value='desc'>

                        descending
                        
                    </option>

                    <option value="asc">

                        ascending
                        
                    </option>

                </select>

        </div>
    );
};

export default Dropdown;
