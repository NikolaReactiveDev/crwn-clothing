import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';

import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div>
            {
                hidden ?
                null :
                <CartDropdown />
            }
        </div>
    )
};

const mapStateToProps = state => ({
        currentUser: state.user.currentUser,
        hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);
