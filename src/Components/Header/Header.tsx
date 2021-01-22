import React from 'react';
import h from './Header.module.css'


const Header = () => {
    return <div className={h.header}>
        <img className={h.img} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
    </div>
}

export default Header;