import React from 'react';
import Logo from '../../QC-logo.png'
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <Navbar></Navbar>
            // <nav className=' flex flex-row bg-purple-500 justify-around text-white'>
            //     <NavLink className='ml-4' to='/'><img src={Logo} alt="" /> </NavLink>
            //     <NavLink className='ml-4' to='/Home'>Home</NavLink>
            //     <NavLink className='ml-4' to='/quiz'>Quiz</NavLink>
            //     <NavLink className='ml-4' to='/about'>About</NavLink>
            // </nav>
    );
};

export default Header;