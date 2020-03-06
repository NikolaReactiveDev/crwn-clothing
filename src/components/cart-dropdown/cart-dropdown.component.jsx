import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id}item={cartItem}/>)
            }
            </div>
            <CustomButton >GO TO THE CHEKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps= state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
