import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/main-page';
import { Layout } from './components/web-store/layout/Layout';
import CartPage from './pages/cart-page';
import ProductPage from './pages/product-page';
import { useState } from 'react';
import Sidebar from "/src/components/web-store/sidebar/sidebar.tsx"

function App() {

  const [items, setCart] = useState<string[]>([]);

  const addItemToCart = (item: string) => {
    setCart([...items, item]);
  };

  return (
    <>
            <Sidebar items={items}/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage addItemToCart={addItemToCart} />} />
        </Route>
        <Route path='/cart' element={<Layout />}>
          <Route index element={<CartPage />} />
        </Route>
        <Route path='/product' element={<Layout />}>
          <Route index element={<ProductPage addItemToCart={addItemToCart} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App