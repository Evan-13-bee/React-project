import React from 'react';
import s from './Profile.module.css';
import MyPosts, { PropsPostsType } from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';

// type ProfileType = {
//     updateNewPostText: props.updateNewPostText,
//     newPostText: props.state.profilePage.newPostText,
//     posts: props.state.profilePage.posts,
//     dispatch: props.dispatch
// }

const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;