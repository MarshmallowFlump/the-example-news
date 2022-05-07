import React from 'react';
import Back from '../reuseable/Back';
import { Link } from 'react-router-dom';

const MyProfile = (props) => {

    const { profile } = props;

    return (

        <div className='myProfile'>

             <Back />

            <h1>My Profile</h1>

            <h2>username: {profile.username}</h2>

            <h2>name: {profile.name}</h2>

            <h2>Avatar:</h2>

            <img src={`${profile.avatar_url}`} alt='my avatar' />

            <Link to={ `/my-articles/${profile.username}`}>

                My Articles

                </Link>

        </div>
    );
};

export default MyProfile;