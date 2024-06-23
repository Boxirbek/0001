import React from 'react';
import { ProductProvider } from './context/ProductContext';
import Filters from './components/Filters';
import ProductList from './components/Product';
import './App.css';

const App = () => {
    return (
        <ProductProvider>
            <div className="App">
                <Filters />
                <ProductList />
            </div>
        </ProductProvider>
    );
};

export default App;
