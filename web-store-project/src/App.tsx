import './App.css'
import HeaderSection from './components/web-store/header';
import PartSelector from './components/web-store/parts';

function App() {
  return (
    <>
      <HeaderSection text={["Currently we do not have any data."]} />
      <PartSelector text={"ram"}></PartSelector>
    </>
  )
}

export default App
