import React from 'react';
import { ArrayType, MessagesType } from '../Components/Dialogs/Dialogs';
export type DialogsType = {
  dialogs: Array<ArrayType>,
  messages: Array<MessagesType>,
}

export type DialogsReducerActionType =
  ReturnType<typeof addNewDialogsMessage>

let initialState: DialogsType = {
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
}



export const dialogsReducer = (state: DialogsType = initialState, action: DialogsReducerActionType): DialogsType => {

  if (action.type == 'ADD-NEW-MESSAGE') {
    // state.dialogs.push({
    //   id: state.dialogs.length,
    //   name: 'User',
    //   img: 'https://wallpaper-house.com/data/out/5/wallpaper2you_60587.jpg'
    // })
    return {
      ...state,
      messages: [
        ...state.messages,
        { id: state.messages.length, message: action.newMessage }// как работает изменение state если передается только кусок стейта
      ]}}
  return state //зачем нам return если снаружи мы перерисовываем весь массив
}

export let addNewDialogsMessage = (text: string) => ({
  type: 'ADD-NEW-MESSAGE',
  newMessage: text
}) as const