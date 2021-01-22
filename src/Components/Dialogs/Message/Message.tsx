import React from 'react';
import s from '../Dialogs.module.css';
type MessgeType = {
    message: string
}
export function Message(props: MessgeType) {
    return <div className={s.dialog}>{props.message}</div>;
}
