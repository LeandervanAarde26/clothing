import React from 'react';
import { Button } from '../Button/Button.component';
import "./cartDropdown.styles.scss";
import { CartItem } from '../Cart-item/CartItem.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartDrop.context';
import { useNavigate } from 'react-router-dom';
export const CartDropdown = () => {
    const navigate = useNavigate();

    const goToCheckout = () =>{
        navigate("/checkout");
    }

    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container '>
            <div className='cart-items'></div>
          {cartItems.map((items) => (<CartItem key={items.id} cartItems={items}/>))}


            <Button
                children={'Checkout'}
                onClick={goToCheckout}
            />
        </div>
    );
};

