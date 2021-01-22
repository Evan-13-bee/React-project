import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";

type DialogItemType = {
    id: number,
    img: string,
    name: string
}

export function DialogItem(props: DialogItemType) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}><img src={props.img}/>{props.name}</NavLink>
        </div>);
}
