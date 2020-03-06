import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors.js';

import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () =>dispatch(toggleCartHidden())
});

const mapStateToProps= state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
