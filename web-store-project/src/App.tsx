import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/main-page';
import { Layout } from './components/web-store/layout/Layout';
import CartPage from './pages/cart-page';
import ProductPage from './pages/product-page';
import { useState } from 'react';

function App() {

  const [items, setCart] = useState("");

   const addItemToCart = (item: string) => {
        setCart([...items, item]);
    };

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path='/cart' element={<Layout />}>
          <Route index element={<CartPage />} />
        </Route>
        <Route path='/product' element={<Layout />}>
          <Route index element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App