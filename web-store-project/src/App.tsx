import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';
import { Layout } from './components/web-store/layout/Layout';
import CartPage from './pages/cart-page';
import ProductPage from './pages/product-page';
import { useState } from 'react';
import Sidebar from "./components/web-store/sidebar/sidebar";
import type { Part } from "./components/web-store/repositories/PartTypes";
import FavouritesPage from './pages/favourites-page';
import { useCart } from './components/web-store/hooks/useCart';

function App() {

  const {addItemsToCart, clearAllItems, items, total} = useCart();
  const [favourites, setFavourites] = useState<Part[]>([]);

  const addFavourite = (item: Part) => {
    setFavourites([...favourites, item]);
  };

  const removeFavourite = (index: number) => {
    setFavourites(favourites.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage addItemToCart={addItemsToCart}/>} />
          </Route>
          {/* <Route path='/cart' element={<Layout />}>
            <Route index element={<CartPage items={items} total={total} removeItemFromCart={removeItemFromCart} clearCart={clearCart} />} />
          </Route> */}
          <Route path='/product' element={<Layout />}>
            <Route index element={<ProductPage addItemToCart={addItemsToCart} addFavourite={addFavourite} />} />
          </Route>
          <Route path='/favourites' element={<Layout />}>
            <Route index element={<FavouritesPage favourites={favourites} removeFavourite={removeFavourite} />} />
          </Route>
        </Routes>
      </div>
      <Sidebar items={items} total={total} clearAllItems={clearAllItems}/>

    </>
  )
}
export default App;