import React, { useState } from 'react';
import s from './Dialogs.module.css';
import { Route } from "react-router-dom";
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export type DialogsType = {
    dialogs: Array<ArrayType>,
    messages: Array<MessagesType>,
    dispatch: Function
}

export type MessagesType = {
    id: number, 
    message: string
}

export type ArrayType = {
    id: number,
    name: string,
    img: string
}

const Dialogs = (props: DialogsType) => {

let [message, setMessage] = useState<string>('')
let addNewMessage = () => {
    props.dispatch(message)
    setMessage('')
}


    let dialogsElements = props.dialogs.map((d: ArrayType) => <DialogItem img={d.img} name={d.name} id={d.id} />); 
    let messagesElements = props.messages.map((m: MessagesType) => <Message message={m.message} />);
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <input 
                value={message}  
                onChange={(e) => setMessage(e.currentTarget.value)}
                type="text"/>
                <button onClick={addNewMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;