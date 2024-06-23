import React, { createContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialState = {
    products: [],
    filteredProducts: [],
    brandFilter: '',
    colorFilter: '',
    sortBy: ''
};

const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload
            };
        case 'SET_BRAND_FILTER':
            return {
                ...state,
                brandFilter: action.payload,
                filteredProducts: state.products.filter(product =>
                    action.payload === '' || product.brand === action.payload
                )
            };
        case 'SET_COLOR_FILTER':
            return {
                ...state,
                colorFilter: action.payload,
                filteredProducts: state.products.filter(product =>
                    action.payload === '' || product.color === action.payload
                )
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
                filteredProducts: [...state.filteredProducts].sort((a, b) => {
                    if (action.payload === 'price-asc') {
                        return a.price - b.price;
                    } else if (action.payload === 'price-desc') {
                        return b.price - a.price;
                    }
                    return 0;
                })
            };
        default:
            return state;
    }
};

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SET_PRODUCTS', payload: data });
            });
    }, []);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };
