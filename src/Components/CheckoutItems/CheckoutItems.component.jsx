import React, {useContext} from 'react';
import { CartContext } from '../../contexts/CartDrop.context';
import './checkoutItems.styles.scss';
export const CheckoutItems = ({cartItems}) => {
    const {name, imageUrl, quantity, price} = cartItems; 
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)
    const addItemHandler = () => addItemToCart(cartItems);
    const removeitemHandler = () => removeItemFromCart(cartItems);
    const clearItemHandler = () => clearItemFromCart(cartItems);
    
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
            <img  src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeitemHandler}> &#10094;</div>
                <span className='value '><strong>{quantity}</strong></span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}> &#10005;</div>          
        </div>
    );
};

