import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {
        HeaderContainer,
        LogoContainer,
        OptionsContainer,
        OptionLink } from './header.styles.jsx';


import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from  '../../redux/user/user.selectors.js';

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';

import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop" >
                    SHOP
                </OptionLink>
                <OptionLink to="/shop" >
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div' className="option" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to="/signin" >
                    SignIn
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ?
                null :
                <CartDropdown />
            }
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
