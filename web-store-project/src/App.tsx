import './App.css'
import HeaderSection from './components/web-store/header/header';
import HeaderSection from './components/web-store/header'
import PartSpecifications from './components/web-store/specifications/specifications'
import { pcProducts } from './components/web-store/product_data/product_data'
import './App.css'

function App() {
  return (
    <>
      <HeaderSection selection={["Menu", "Sales", "About Us", "Compatibility Checker"]} />
      <PartSpecifications pcProducts={pcProducts} />
    </>
  )
}

export default App