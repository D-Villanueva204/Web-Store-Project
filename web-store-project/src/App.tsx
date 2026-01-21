import './App.css'
import HeaderSection from './components/web-store/header/header';

function App() {
  return (
    <>
      <HeaderSection selection={["Menu", "Sales", "About Us", "Compatibility Checker"]} />
    </>
  )
}

export default App
