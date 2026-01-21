import './App.css'
import HeaderSection from './components/web-store/header'
import { Routes, Route } from "react-router-dom"
import CartPage from "./pages/cart-page"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HeaderSection text={["Currently we do not have any data."]} />}
        />
        
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
