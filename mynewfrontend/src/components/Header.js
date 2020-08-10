import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>My Try</h2>
        <h4>User Mangement Application</h4>
        <div className='header__nav'>
            {/* writen in Approuter.js */}
            <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>Add User</NavLink>
        </div>
    </header>
);

export default Header;