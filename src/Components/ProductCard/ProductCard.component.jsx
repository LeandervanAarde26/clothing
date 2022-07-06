import React from 'react';
import './productCard.styles.scss';
import { Button } from '../Button/Button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartDrop.context';

export const ProductCard = ({product}) => {
    const { name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
             <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
             </div>
             <Button buttonType={'inverted'} onClick={addProductToCart} children={'add to cart'}></Button>
        </div>
    );
};

