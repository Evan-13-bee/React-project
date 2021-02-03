import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import Dialogs, { DialogsType } from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'
import { PropsPostsType } from './Components/Profile/MyPosts/MyPosts';
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';

type AppType = {}

function App(props: AppType) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() =>
          <DialogsContainer />}
        />
        <Route path='/profile' render={() =>
          <Profile/>}
        /> {/*render () => <Profile posts={posts}/>}  */}
      </div>
    </div>
  );
}

export default App;


// updateNewPostText = { props.updateNewPostText }
// newPostText = { props.state.profilePage.newPostText }
// posts = { props.state.profilePage.posts }
// dispatch = { props.dispatch } 