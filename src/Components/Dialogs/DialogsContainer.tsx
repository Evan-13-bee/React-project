import React, { Dispatch, useState } from 'react';
import s from './Dialogs.module.css';
import { Route } from "react-router-dom";
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { StateStoreType } from '../../redux/ReduxStore';
import { addNewDialogsMessage, DialogsReducerActionType, DialogsType } from '../../redux/DialogsReducer';

type DialogsContainerType = {
  store: DialogsType
}

// export const DialogsContainer = () => {


//   return (
//     <StoreContext.Consumer>{
//       (store) => {
//         let addNewMessage = (message: string) => store.dispatch(addNewDialogsMessage(message))
//         return <Dialogs
//           dialogs={store.getState().dialogsPage.dialogs}
//           messages={store.getState().dialogsPage.messages}
//           dispatch={addNewMessage}
//         />
//       }}
//     </StoreContext.Consumer>
//   )
// }
let mapStateToProps = (state: StateStoreType) => { 
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}
let mapDispatchToProps = (dispatch: Dispatch<DialogsReducerActionType>) => {
  return {
    dispatch: (message: string) => dispatch(addNewDialogsMessage(message))
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) 
