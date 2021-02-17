import React, { useRef, useState } from 'react';
import { ArrayType } from '../../Dialogs/Dialogs';
import s from './MyPosts.module.css';
import Post from './Post/Post';
export type PropsPostsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (postMessage: string) => void
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

const MyPosts = (props: PropsPostsType) => {


    let postsElements = props.posts.map((p: PostsType) => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    let addPost = () => {
        let text = newPostElement.current?.value
        props.addPost()
    }

    let onPostChange = (e: { currentTarget: { value: string; }; }) => {
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;