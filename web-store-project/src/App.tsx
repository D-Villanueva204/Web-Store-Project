import './App.css'
import HeaderSection from './components/web-store/header/header';
import PartSpecifications from './components/web-store/specifications/specifications'
import './App.css'

function App() {
  return (
    <>
      <HeaderSection selection={["Menu", "Sales", "About Us", "Compatibility Checker"]} />
      <PartSpecifications />
    </>
  )
}

export default App