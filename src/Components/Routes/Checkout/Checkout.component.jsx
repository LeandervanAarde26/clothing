import React, { useContext }  from 'react';
import { CartContext } from '../../../contexts/CartDrop.context';
import { CheckoutItems } from '../../CheckoutItems/CheckoutItems.component';
import './Checkout.styles.scss';
export const Checkout = () => {

        const {cartItems, total } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block '>
                    <span>Product</span>
                </div>
                <div className='header-block '>
                    <span>Description</span>
                </div>
                <div className='header-block '>
                    <span>Quantity</span>
                </div>
                <div className='header-block '>
                    <span>Price</span>
                </div>
                <div className='header-block '>
                    <span>Remove</span>
                </div>
            </div>
         
            {
                 cartItems.map((cartItem) =>(
                        <CheckoutItems key={cartItem.id} cartItems={cartItem}/>
                    ))
            }
               <span className='total'>Total price (USD): <strong>${total}</strong></span>
     
         
        </div>
    );
};

