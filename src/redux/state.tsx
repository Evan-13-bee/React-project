import React from 'react';
import { dialogsReducer } from './DialogsReducer';
import { profileReducer } from './ProfileReducer';

export let store = {
  _state: {
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      dialogs: [
        { id: 1, name: 'Dimych', img: 'https://diagnostax.co.uk/wp-content/uploads/Cool-Cats-2.0-1024x585.png' },
        { id: 2, name: 'Andrew', img: 'https://wallpaperaccess.com/full/82955.jpg' },
        { id: 3, name: 'Sveta', img: 'https://i.ytimg.com/vi/piFZvpMe_K8/sddefault.jpg' },
        { id: 4, name: 'Sasha', img: 'https://i.pinimg.com/originals/e4/1e/98/e41e98a0ca198a9e47c17c57811cfccf.jpg' },
        { id: 5, name: 'Viktor', img: 'https://www.partneringforpets.org/wp-content/uploads/2014/06/sno-cone.jpg' },
        { id: 6, name: 'Valera', img: 'https://pbs.twimg.com/profile_images/453072762735566848/B52gVHi2.jpeg' }
      ]
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
      ],
      newPostText: 'it-camasutra'
    },
    sideBar: {}


  },
  getState() {
    return this._state
  },
  _callSubscriber(item: any) {
    console.log(item);
  },

  subscribe(observer: any) {
    this._callSubscriber = observer
  },
  dispatch(action: any) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action) // если отдать кусок массива в функцию, фунция меняет исходный массив?
    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._callSubscriber(this._state) // нужен ли здесь параметр, ведь перерисовка вызывается без него
  }
}

const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

let updateNewPostTextActionCreator = (text: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text

  }
}

let addNewDialogsMessage = (text: string) => {
  return {
    type: 'ADD-NEW-MESSAGE',
    newMessage: text
  }
}

window.store = store
declare global {
  interface Window { store: any; }
}

window.store = window.store || {};
