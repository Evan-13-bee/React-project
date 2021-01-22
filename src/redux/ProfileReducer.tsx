import React from 'react';
import { PostsType } from '../Components/Profile/MyPosts/MyPosts';
type InitialStateType = {
  posts: Array<PostsType>,
  newPostText: string
}

let initialState: InitialStateType = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
  newPostText: 'it-camasutra'
}

export const profileReducer = (state: any=initialState, action: any) => {
  if (action.type === 'ADD-POST') {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    }
    state.posts.push(newPost)
    state.newPostText=''
  }
  else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    state.newPostText = action.newText
  }
  return state
}