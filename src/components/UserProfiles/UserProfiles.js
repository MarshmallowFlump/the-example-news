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
        <div className='profilePage'>
             
            <Home />

            <div className='profileBox'>

                <h1 className='profile'>

                    Profile
                
                </h1>
                
                    <div className='userProfileContainer'>

                        <h2 className='username'>
                    
                            Username: 
                    
                        </h2>
                
                        <h2 className='actualUsername'>

                            {profile.username}

                        </h2>

                        <h2 className='name'>
                    
                            Name: 
                    
                        </h2>

                        <h2 className='actualName'>

                            {profile.name}

                        </h2>

                    </div>

                <h2 className='avatar'>
                    
                    Avatar:
                    
                </h2>

                <img className='avatarImage' src={`${profile.avatar_url}`} alt='my avatar' />

                <Link className='viewAllPostsLink' to={`/users/${profile.username}/articles/`}>
                    
                    View All Posts
                
                </Link>
             
            </div>        

        </div>
    );
};

export default UserProfiles;