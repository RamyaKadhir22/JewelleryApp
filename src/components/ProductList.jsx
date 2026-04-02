import ProductCard from './ProductCard';
import { products } from '../data/product';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList({ addToCart, cart, increaseQty, decreaseQty }) {
    const [filter, setFilter] = useState("all");

    const allProducts = products.flatMap(category => category.products);

    const filteredProducts = allProducts.filter((p) => {
        if (filter === "all")
            return true;
        return p.category === filter;
    });



    return (
        <>
            <div className='filter'>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("Gold")}>Gold</button>
                <button onClick={() => setFilter("Diamond")}>Diamond</button>
                <button onClick={() => setFilter("Silver")}>Silver</button>
            </div>
            <div className='product-grid'>{
                filteredProducts.map((p) => (
                    <ProductCard key={p.id} product={p}
                        addToCart={addToCart}
                        cart={cart}
                        increaseQty={increaseQty}
                        decreaseQty={decreaseQty} />
                ))
            }
            </div>
        </>
    );
}
export default ProductList;