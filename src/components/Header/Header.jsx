import React from 'react';
import { NavLink, Link } from "react-router-dom"
import {logo} from "../../utils/index";
import '../../App.scss'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <Link exact to='/' className='header__logo-link'>
                    {logo()} <h3 className='header__logo-title'>YourSmart</h3>
                </Link>
            </div>
            <div className='header__nav'>
                <ul className='nav'>
                    <li className='nav__item'>
                        <NavLink exact to='/' className='nav__item-link'
                                 activeClassName='nav__item-link--selected'>Home</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to='/cart' className='nav__item-link'
                                 activeClassName='nav__item-link--selected'>Cart</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to='/favorites' className='nav__item-link'
                                 activeClassName='nav__item-link--selected'>Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header