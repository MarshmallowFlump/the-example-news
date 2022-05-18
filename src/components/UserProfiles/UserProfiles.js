import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUser } from '../../utils/api';
import Home from '../reuseable/Home';

const UserProfiles = () => {

    const { user_id } = useParams();

    const [ profile, setProfile ] = useState([]);

    useEffect(() => {
        getUser(user_id)
        .then(({ user }) => {
            setProfile(user);
        });
    }, [user_id])

    return (
        <div>
             <Home />

                <h1>

                    Profile

                </h1>

                <h2>
                    
                    Username: {profile.username}
                    
                </h2>

                <h2>
                    
                    Name: {profile.name}
                    
                </h2>

                <h2>
                    
                    Avatar:
                    
                </h2>

                <img src={`${profile.avatar_url}`} alt='my avatar' />
                
                <Link to={`/users/${profile.username}/articles/`}>
                    
                View All Posts
                
                </Link>

        </div>
    );
};

export default UserProfiles;