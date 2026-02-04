import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';
import { Layout } from './components/web-store/layout/Layout';
import CartPage from './pages/cart-page';
import ProductPage from './pages/product-page';
import { useState } from 'react';
import Sidebar from "./components/web-store/sidebar/sidebar";
import type { Part } from "./components/web-store/parts/general/PartTypes";
import FavouritesPage from './pages/favourites-page';

function App() {

  const [items, setCart] = useState<Part[]>([]);
  const [favourites, setFavourites] = useState<Part[]>([]);

  const addFavourite = (item: Part) => {
      setFavourites([...favourites, item]);
  };

  const removeFavourite = (index: number) => {
      setFavourites(favourites.filter((_, i) => i !== index));
  };

  const addItemToCart = (item: Part) => {
    if (item && item.name != "Not Found") {
      setCart([...items, item]);
      setTotal(total + Number(item.price));
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0.00);
  }


  return (
    <>
      <Sidebar items={items} clearCart={clearCart}/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage addItemToCart={addItemToCart} />} />
        </Route>
        <Route path='/cart' element={<Layout />}>
          <Route index element={<CartPage />} />
        </Route>
        <Route path='/product' element={<Layout />}>
          <Route index element={<ProductPage addItemToCart={addItemToCart} addFavourite={addFavourite} />} />
        </Route>
        <Route path='/favourites' element={<Layout />}>
          <Route index element={<FavouritesPage favourites={favourites} removeFavourite={removeFavourite} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App