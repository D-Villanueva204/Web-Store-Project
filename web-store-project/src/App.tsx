import './App.css'
import HeaderSection from './components/web-store/header';
// import PartSelector from './components/web-store/parts/cpu';
import CaseSelector from './components/web-store/parts/case';
import CPUSelector from './components/web-store/parts/cpu';
import CoolerSelector from './components/web-store/parts/coolers';
import GPUSelector from './components/web-store/parts/gpu';
import MOBOSelector from './components/web-store/parts/motherboard';
import OSSelector from './components/web-store/parts/os';
import PSUSelector from './components/web-store/parts/psu';
import RamSelector from './components/web-store/parts/ram';

function App() {
  return (
    <>
      <HeaderSection text={["Currently we do not have any data."]} />
      <CaseSelector text={"ram"}></CaseSelector>
      <CPUSelector text={"ram"}></CPUSelector>
      <CoolerSelector></CoolerSelector>
      <GPUSelector></GPUSelector>
      <MOBOSelector></MOBOSelector>
      <OSSelector></OSSelector>
      <PSUSelector></PSUSelector>
      <RamSelector></RamSelector>
    </>
  )
}

export default App
