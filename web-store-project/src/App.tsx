import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';
import { Layout } from './components/web-store/layout/Layout';
import CartPage from './pages/cart-page';
import ProductPage from './pages/product-page';
import { useState } from 'react';
import Sidebar from "./components/web-store/sidebar/sidebar";
import type { Part } from "./components/web-store/parts/general/PartTypes";

function App() {

  const [items, setCart] = useState<Part[]>([]);
  const [total, setTotal] = useState<number>(0.00);

  const addItemToCart = (item: Part) => {
    setCart([...items, item]);
    setTotal(total + item.price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0.00);
  }


  return (
    <>
      <div className="pages">
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
      </div>
      <div>
        <Sidebar items={items} clearCart={clearCart} total={total}/>
      </div>
    </>
  )
}
export default App