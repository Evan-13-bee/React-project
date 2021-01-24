import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import Dialogs, { DialogsType } from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'
import { PropsPostsType } from './Components/Profile/MyPosts/MyPosts';

type AppType = {
  dialogs: DialogsType,
  posts: PropsPostsType
}

function App(props: any) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() =>
            <Dialogs
              messages={props.state.dialogsPage.messages}
              dialogs={props.state.dialogsPage.dialogs}
              dispatch={props.dispatch}
            />}
          />
          <Route path='/profile' render={() =>
            <Profile
              state={props.state}
              store={props.store}
            />}
          /> {/*render () => <Profile posts={posts}/>}  */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


// updateNewPostText = { props.updateNewPostText }
// newPostText = { props.state.profilePage.newPostText }
// posts = { props.state.profilePage.posts }
// dispatch = { props.dispatch } 