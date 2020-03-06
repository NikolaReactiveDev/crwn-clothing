import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { createStructuredSelector } from 'reselect';
import { selectCartItems  } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id}item={cartItem}/>)
                : <span className="empty-message">Your cart is empty</span>
            }
            </div>
            <CustomButton   onClick={() => {
                 history.push('/checkout');
                 toggleCartHidden()
              }} >GO TO THE CHEKOUT</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps= createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
