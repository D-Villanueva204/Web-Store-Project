import HeaderSection from './components/web-store/header'
import partSpecifications from './components/web-store/specifications/specifications'
import './App.css'

function App() {
  return (
    <>
      <HeaderSection text={["Currently we do not have any data."]} />
      <partSpecifications />
    </>
  )
}

export default App