import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component.jsx'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
        <div className="cart-items" />
            <CustomButton >GO TO THE CHEKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;
