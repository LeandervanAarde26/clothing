import React from 'react';
import './CartItem.styles.scss';
 export const CartItem = ({cartItems}) => {
    const {name, imageUrl, quantity, price} = cartItems; 
    return (
        <div className='cart-item-container '>
            <img src={imageUrl} alt={name}/>
      
            <div className='item-details'>
            <span className='name'>{name}</span>
            <span>Quantity: <strong>{quantity}</strong></span>
            <span>USD:<strong> ${price}</strong></span>
            </div>
        </div>
    );
};

