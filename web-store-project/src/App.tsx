import HeaderSection from './components/web-store/header'
import PartSpecifications from './components/web-store/specifications/specifications'
import './App.css'

function App() {
  return (
    <>
      <HeaderSection text={["Currently we do not have any data."]} />
      <PartSpecifications />
    </>
  )
}

export default App