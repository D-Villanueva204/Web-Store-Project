import HeaderSection from './components/web-store/header'
import PartSpecifications from './components/web-store/specifications/specifications'
import { pcProducts } from './components/web-store/product_data/product_data'
import './App.css'

function App() {
  return (
    <>
      <HeaderSection text={["Currently we do not have any data."]} />
      <PartSpecifications pcProducts={pcProducts} />
    </>
  )
}

export default App