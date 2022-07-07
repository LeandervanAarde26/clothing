import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shopdata';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext ({
    categoriesMap: {},
});

export const CategoriessProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() =>{
        const getCategoriesMap = async () =>{
          const catMap = await getCategoriesAndDocuments();
          setCategoriesMap(catMap);
        };
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};