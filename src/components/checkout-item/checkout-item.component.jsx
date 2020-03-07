import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions.js';

const CheckoutItem = ({item , clearItemFromCart, addItem, removeItem }) => {
    const { imageUrl, name, price, quantity} = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name" >{name}</span>
            <span className="quantity" >
                <div onClick={() => removeItem(item)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(item)} className="arrow">&#10095;</div>
            </span>
            <span className="price" >{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(item)}>&#10005;</div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
