import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/main-page';
import CartPage from './pages/cart-page';
import { pcProducts } from './components/web-store/product_data/product_data'

function App() {
  const [cartItems, setCartItems] = useState(
    pcProducts.map(product => ({
      name: product.name,
      price: product.price
    }))
  )
  const removeItem = (indexToRemove: number) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove))
  }

  return (
    <Routes>
      <Route path="/" element={<MainPage cartItems={cartItems} />} />
      <Route 
        path="/cart" 
        element={
          <CartPage 
            cartItems={cartItems}
            removeItem={removeItem}
          />
        } 
      />
    </Routes>
  )
}
export default App