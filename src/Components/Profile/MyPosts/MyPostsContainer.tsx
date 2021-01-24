import React, { useRef, useState } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import { ArrayType } from '../../Dialogs/Dialogs';
import MyPosts from './MyPosts';
import s from './MyPosts.module.css';
import Post from './Post/Post';
export type PropsPostsType = {
    store: any
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

const MyPostsContainer= (props: PropsPostsType) => {


    let postsElements = props.store.getState().profilePage.posts

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    let addPost = () => {
            props.store.dispatch(addPostActionCreator())
            // props.updateNewPostText('')
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts 
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={postsElements}
        newPostText={props.store.getState().profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;