import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Filters = () => {
    const { state, dispatch } = useContext(ProductContext);

    const handleBrandChange = (e) => {
        dispatch({ type: 'SET_BRAND_FILTER', payload: e.target.value });
    };

    const handleColorChange = (e) => {
        dispatch({ type: 'SET_COLOR_FILTER', payload: e.target.value });
    };

    const handleSortChange = (e) => {
        dispatch({ type: 'SET_SORT_BY', payload: e.target.value });
    };

    return (
        <div className="filters">
            <label>
                Brand:
                <select value={state.brandFilter} onChange={handleBrandChange}>
                    <option value="">All</option>
                    <option value="ASTRO">ASTRO</option>
                    <option value="Razer">Razer</option>
                    <option value="HyperX">HyperX</option>
                </select>
            </label>
            <label>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Color:
                <select value={state.colorFilter} onChange={handleColorChange}>
                    <option value="">All</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                </select>
            </label>
            <label>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Sort by Price:
                <select value={state.sortBy} onChange={handleSortChange}>
                    <option value="price-asc">Price Low to High</option>
                    <option value="price-desc">Price High to Low</option>
                </select>
            </label>
        </div>
    );
};

export default Filters;
