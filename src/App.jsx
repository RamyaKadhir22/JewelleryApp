import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './routes/Cart'
import ProductList from './components/ProductList'


function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existingProduct = prev.find(p => p.id === product.id);
      if (existingProduct) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  const removeCart = (indexToBeRemoved) => {
    setCart(prev =>
      prev.filter((_, index) => index !== indexToBeRemoved)
    )
  }
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
        .filter(item => item.quantity > 0)
    );
  }

  return (
    <div className='container'>
      <div className='navbar'>
        <h1>Fashion Jewellery</h1>
        <button onClick={() => setIsCartOpen(true)}>Cart({cart.length})</button>
      </div>
      <div className='main-layout'>
        <div className={`content ${isCartOpen ? "shrink" : ""}`}>
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={<ProductList addToCart={addToCart}
                  cart={cart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty} />}>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        {isCartOpen && (
          <div className='cart-panel'>
            <button onClick={() => setIsCartOpen(false)}>Close</button>
            <Cart cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
          </div>
        )}

      </div>
    </div >
  )
}

export default App;
