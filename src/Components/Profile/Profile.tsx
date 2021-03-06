import React from 'react';
import s from './Profile.module.css';
import MyPosts, { PropsPostsType } from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { StoreType } from '../../redux/ReduxStore';

type ProfileType = {
    store: StoreType
}
const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;