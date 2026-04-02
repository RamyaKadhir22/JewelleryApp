function Cart({ cart, increaseQty, decreaseQty }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <>
            <div className='cart'>
                <h2>Cart</h2>
                <h2>Total: {total}</h2>
                {cart.length === 0 ? (<p>Your cart is empty</p>) :
                    (
                        cart.map((item) => (
                            <div className='cart-item' key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <span>{item.name} </span>
                                <div className='cart-button'>
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>
                                <span className="cart-span">{item.price * item.quantity}</span>
                            </div>
                        ))
                    )}
            </div>

        </>
    )

}

export default Cart;