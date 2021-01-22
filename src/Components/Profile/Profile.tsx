import React from 'react';
import s from './Profile.module.css';
import MyPosts, { PropsPostsType } from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
                posts={props.posts}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;