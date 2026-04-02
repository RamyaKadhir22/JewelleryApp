function ProductCard({ product, addToCart, cart, increaseQty, decreaseQty }) {
    const cartItem = cart.find(item => item.id === product.id);

    return (
        <>
            <div>
                <div className="card">
                    <img src={product.image} ></img>
                    <h2>{product.name}</h2>
                    <p>Rs.{product.price}</p>
                    {cartItem ? (
                        <div className="stepper-container">
                            <div className="stepper-inner-container">
                                <button className="step-btn" onClick={() => decreaseQty(product.id)}>-</button>
                                <span className="spin-cartnum">{cartItem.quantity}</span>
                                <button className="step-btn" onClick={() => increaseQty(product.id)}>+</button>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                    )}
                </div>
            </div>
        </>
    )
}
export default ProductCard;