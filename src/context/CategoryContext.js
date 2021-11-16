import React, { createContext, useContext } from "react";
import CategoryListData from './data/category-list-data.json';

const CategoryContext = createContext();
const { Provider } = CategoryContext;

const CategoryContextProvider = ({ children }) => {
    return (
        <Provider value={{CategoryListData}} displayName="CategoryContextProvider">
            { children }
        </Provider>
    );
}

export default CategoryContextProvider;

export const useCategoryContext = () => useContext(CategoryContext);