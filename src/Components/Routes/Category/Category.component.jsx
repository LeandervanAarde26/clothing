import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Category.styles.scss';
import { CategoriesContext } from '../../../contexts/Categories.context';
import { ProductCard } from '../../ProductCard/ProductCard.component';

export const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category])


    console.log(products)

    return (
        <>
            <h2 className='categoryTitle'>{category.toUpperCase()}</h2>
            <div className='categoryContainer'>

                {
                    products && products.map((product) => (
                        <ProductCard product={product} />
                    ))
                }
            </div>
        </>
    )
};

