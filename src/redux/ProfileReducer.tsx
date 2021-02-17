import React from 'react';
import { PostsType } from '../Components/Profile/MyPosts/MyPosts';
export type InitialStateType = {
  posts: Array<PostsType>,
  newPostText: string
}

export type ProfileReducerActionType =
  ReturnType<typeof addPostActionCreator> |
  ReturnType<typeof updateNewPostTextActionCreator>


let initialState: InitialStateType = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
  newPostText: 'it-camasutra'
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionType): InitialStateType => {
  if (action.type === 'ADD-POST') {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    }
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: ''
    }
  }
  else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    return { ...state, newPostText: action.newText }
   
  }
  return state
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' }) as const

export let updateNewPostTextActionCreator = (text: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text } as const
)