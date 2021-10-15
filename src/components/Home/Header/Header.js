import React from 'react';
import './Header.css'
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;