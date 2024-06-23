import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
    const { state } = useContext(ProductContext);

    return (
        <div className="product-list">
            {state.filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price}</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
