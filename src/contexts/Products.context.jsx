import { createContext, useState, useEffect } from "react";
import allProducts from '../shopdata.json';

export const ProductContext = createContext ({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(allProducts);
    const value = { products };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};