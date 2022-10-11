import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-row'>
            <div>
            <h2>This is header</h2>
            </div>
            <div>
            <nav>
                <NavLink to='/quiz'>Quiz</NavLink>
                <NavLink to='/'></NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            </div>
        </div>
    );
};

export default Header;