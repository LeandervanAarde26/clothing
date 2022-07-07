import React from 'react';
import shopData from '../../../shopdata';
import { useContext } from 'react';
import { CategoriesContext } from '../../../contexts/Categories.context';
import { ProductCard } from '../../ProductCard/ProductCard.component';
import { CategoryPreview } from '../../categoryPreview/CategoryPreview.component';
import './categories.styles.scss'

export const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
         {Object.keys(categoriesMap).map((title) =>
         {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products} />

         })}

        </div>
    );
};
