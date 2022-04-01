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

    
    return (

        <div>

            Filter:  

                <select className='select'
                    name='topicSelect'
                    id='topicSelect'
                    onChange={handleTopicClick}
                >
                
                    <option defaultValue="All Topics">
                        
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

                <select>
                
                    <option defaultValue="Date">

                        date

                    </option>

                    <option value="title">

                        title

                    </option>

                    <option value="topic">

                        topic

                    </option>

                    <option value="user">

                        votes

                    </option>

                    <option value="date">

                        date

                    </option>

                    <option value="comment-count">

                        comment count

                    </option>
                                
                </select>

            Order:

                <select>

                    <option onClick={handleDescClick} defaultValue="Descending">

                        descending
                        
                    </option>

                    <option onClick={handleAscClick} value="">

                        ascending
                        
                    </option>

                </select>

        </div>
    );
};

export default Dropdown;
