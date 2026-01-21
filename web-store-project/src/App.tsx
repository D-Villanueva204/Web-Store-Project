import './App.css'
import HeaderSection from './components/web-store/header/header';
import PartSpecifications from './components/web-store/specifications/specifications'
import './App.css'
import { Routes, Route } from "react-router-dom"
import CartPage from "./pages/cart-page"
import CartSection from './components/web-store/cart-section';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HeaderSection selection={["Menu", "Sales", "About Us", "Compatibility Checker"]} />}
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <CartSection/>
      <PartSpecifications />
    </>
  )
}

export default App