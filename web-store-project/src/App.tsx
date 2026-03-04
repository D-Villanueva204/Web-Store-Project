import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';
import { Layout } from './components/web-store/layout/Layout';
import CartPage from './pages/cart-page';
import OrdersPage from './pages/orders-page';
import ProductPage from './pages/product-page';
import Sidebar from "./components/web-store/sidebar/sidebar";
import FavouritesPage from './pages/favourites-page';
import { useCart } from './components/web-store/hooks/useCart';
import { useFavourites } from './components/web-store/hooks/useFavourites';


function App() {

  /**
   * Dominique Villanueva
   * 
   * Originally, state would've handled directly in App. We now use the useCart()
   * hook for retrieving state of the cart and modifying its state.
   * 
   */
  const {addItemsToCart, clearAllItems, items, total, removeItemFromCart} = useCart();
  const {handleToggleFavourite, } = useFavourites();


  const createFavourite = (id: string) => {
    handleToggleFavourite(id);
  };

  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage addItemToCart={addItemsToCart}/>} />
          </Route>
          <Route path='/cart' element={<Layout />}>
            <Route index element={<CartPage items={items} total={total} removeItemFromCart={removeItemFromCart} clearCart={clearAllItems} />} />
          </Route>
          <Route path='/product' element={<Layout />}>
            <Route index element={<ProductPage addItemToCart={addItemsToCart} addFavourite={createFavourite} />} />
          </Route>
          <Route path='/favourites' element={<Layout />}>
            <Route index element={<FavouritesPage />} />
          </Route>
          <Route path='/orders' element={<Layout />}>
            <Route index element={<OrdersPage />} />
          </Route>
        </Routes>
      </div>
      <Sidebar items={items} total={total} clearAllItems={clearAllItems}/>

    </>
  )
}
export default App;