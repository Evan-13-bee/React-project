import React, { Dispatch, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator, ProfileReducerActionType, InitialStateType } from '../../../redux/ProfileReducer';
import { StateStoreType } from '../../../redux/ReduxStore';
import { ArrayType } from '../../Dialogs/Dialogs';
import MyPosts from './MyPosts';
import s from './MyPosts.module.css';
import Post from './Post/Post';
export type PropsPostsType = {
  store: InitialStateType
}

export type PostsType = {
  id: number,
  message: string,
  likesCount: number
}

// const MyPostsContainer = (props: PropsPostsType) => {


//   // let postsElements = props.store.getState().profilePage.posts

//   let newPostElement = useRef<HTMLTextAreaElement>(null)


//   return (
//     <StoreContext.Consumer>{
//       (store) => {
//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//           // props.updateNewPostText('')
//         }

//         let onPostChange = (text: string) => {
//           store.dispatch(updateNewPostTextActionCreator(text))
//         }
//         return <MyPosts
//           updateNewPostText={onPostChange}
//           addPost={addPost}
//           posts={store.getState().profilePage.posts}
//           newPostText={store.getState().profilePage.newPostText}
//         />
//       }}
//     </StoreContext.Consumer>
//   )
// }
let mapStateToProps = (state: StateStoreType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: Dispatch<ProfileReducerActionType>) => {
  return {
    updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text)),  
    addPost: () => dispatch(addPostActionCreator())
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;