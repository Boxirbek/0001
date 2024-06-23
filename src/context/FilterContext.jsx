import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Filters = () => {
    const { dispatch } = useContext(ProductContext);

    const handleBrandChange = (e) => {
        dispatch({ type: 'FILTER_BY_BRAND', payload: e.target.value });
    };

    const handleColorChange = (e) => {
        dispatch({ type: 'FILTER_BY_COLOR', payload: e.target.value });
    };

    const handleSortChange = (e) => {
        dispatch({ type: 'SORT_BY_PRICE', payload: e.target.value });
    };

    return (
        <aside>
            <div>
                <label>Brand:</label>
                <select onChange={handleBrandChange}>
                    <option value="">All</option>
                    <option value="Brand A">Brand A</option>
                    <option value="Brand B">Brand B</option>
                </select>
            </div>
            <div>
                <label>Color:</label>
                <input type="color" onChange={handleColorChange} />
            </div>
            <div>
                <label>Sort by Price:</label>
                <select onChange={handleSortChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </aside>
    );
};

export default Filters;
