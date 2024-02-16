import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div className='header'>
            <Link style={{ backgroundColor: location.pathname === '/' ? ' rgb(2, 43, 86)' : '' }} className='link' to="/">All Items</Link>
            <Link style={{ backgroundColor: location.pathname === '/fav' ? ' rgb(2, 43, 86)' : '' }} className='link' to="/fav">Favourite</Link>
        </div>
    );
}

export default Header;
