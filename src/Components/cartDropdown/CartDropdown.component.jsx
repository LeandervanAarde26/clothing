import React from 'react';
import { Button } from '../Button/Button.component';
import "./cartDropdown.styles.scss";
export const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container '>
            <div className='cart-items'></div>
            <Button
                children={'Checkout'}
            />
        </div>
    );
};

