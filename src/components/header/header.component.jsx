import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                <Link to="/signin" className="option">
                    SignIn
                </Link>
            </div>
        </div>
    )
};

export default Header;