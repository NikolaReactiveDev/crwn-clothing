import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';

import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentUser }) => {
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
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to="/signin" className="option">
                    SignIn
                    </Link>
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
        currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
