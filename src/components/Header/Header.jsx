import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://ww1.prweb.com/prfiles/2011/12/09/11743502/CTU-Logo-Big.jpg' />

        <div className={s.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header> 
}

export default Header;