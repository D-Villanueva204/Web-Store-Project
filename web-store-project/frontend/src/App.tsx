import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';
import { Layout } from './components/web-store/layout/Layout';
import CartPage from './pages/cart-page';
import OrdersPage from './pages/orders-page';
import ProductPage from './pages/product-page';
import Sidebar from "./components/web-store/sidebar/sidebar";
import FavouritesPage from './pages/favourites-page';
import { useCart } from './hooks/useCart';
import { useFavourites } from './hooks/useFavourites';


function App() {

  /**
   * Dominique Villanueva
   * 
   * Originally, state would've handled directly in App. We now use the useCart()
   * hook for retrieving state of the cart and modifying its state.
   * 
   */
  const { addItemsToCart, clearAllItems, items, total, removeItemFromCart } = useCart();
  const { handleAddFavourite } = useFavourites();


  return (
    <div className="app-wrapper">
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Layout addItemToCart={addItemsToCart} />}>
            <Route index element={<MainPage addItemToCart={addItemsToCart} />} />
          </Route>
          <Route path='/cart' element={<Layout addItemToCart={addItemsToCart}/>}>
            <Route index element={<CartPage items={items} total={total} removeItemFromCart={removeItemFromCart} clearCart={clearAllItems} />} />
          </Route>
          <Route path='/product' element={<Layout addItemToCart={addItemsToCart}/>}>
            <Route index element={<ProductPage addItemToCart={addItemsToCart} handleAddFavourite={handleAddFavourite} />} />
          </Route>
          <Route path='/favourites' element={<Layout addItemToCart={addItemsToCart}/>}>
            <Route index element={<FavouritesPage />} />
          </Route>
          <Route path='/orders' element={<Layout addItemToCart={addItemsToCart}/>}>
            <Route index element={<OrdersPage />} />
          </Route>
        </Routes>
      </div>
      <Sidebar items={items} total={total} clearAllItems={clearAllItems} />

    </div>
  )
}
export default App;