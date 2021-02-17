import React from 'react';
import s from './Profile.module.css';
import MyPosts, { PropsPostsType } from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';

type ProfileContainerType = {
    
}
class ProfileContainer extends React.Component <ProfileContainerType>{
    render() {
    return (
        <Profile {...this.props}/>
    )
}
}

export default ProfileContainer;