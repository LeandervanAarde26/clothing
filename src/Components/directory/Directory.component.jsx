import React from 'react';
import categories from "../CategoriesMenu/categories.json";
import CategoryItem from '../categoryComponent/CategoryItem.component';
import './directory.style.scss';

export const Directory = () => {
    return (
        <div className="categories-container">
        {categories.map((category) => (
         <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    );
};