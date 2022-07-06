import React from 'react';
import './productCard.styles.scss';
import { Button } from '../Button/Button.component';


export const ProductCard = ({product}) => {
    const {id, name, price, imageUrl} = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
             <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
             </div>
             <Button
             buttonType={'inverted'}
             children={'Add to cart'}
             />
        </div>
    );
};

