import React from 'react';
import shopData from '../../../shopdata.json';
import { useContext } from 'react';
import { ProductContext } from '../../../contexts/Products.context';
import { ProductCard } from '../../ProductCard/ProductCard.component';
import './shop.styles.scss'; 
export const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id}
                    product={product}

                />
            ))}
        </div>
    );
};

