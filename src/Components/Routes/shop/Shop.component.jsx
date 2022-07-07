import React from 'react';
import shopData from '../../../shopdata';
import { useContext } from 'react';
import { CategoriesContext } from '../../../contexts/Categories.context';
import { ProductCard } from '../../ProductCard/ProductCard.component';
import { Routes, Route } from 'react-router'; 
import './shop.styles.scss';
import { CategoriesPreview } from '../CategoriesPreview/CategoriesPreview.component';
import { Category } from '../Category/Category.component';
export const Shop = () => {
    return (
        <Routes>
            <Route index element= {<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    );
};
