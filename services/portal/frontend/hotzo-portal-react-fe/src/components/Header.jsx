import './Header.css';

import { Link, Route, Routes } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="navbar">
                <div className="nav-right">
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </header>
        </>
    )
};

export default Header;
