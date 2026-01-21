import './App.css'
import HeaderSection from './components/web-store/header';
import CaseGenerator from './components/web-store/parts/case/caseGenerator';
import CPUGenerator from './components/web-store/parts/cpu/cpuGenerator';
import CoolerGenerator from './components/web-store/parts/cooler/coolerGenerator';
import GPUGenerator from './components/web-store/parts/gpu/gpuGenerator';
import MotherboardGenerator from './components/web-store/parts/mobo/MotherboardGenerator';
import OSGenerator from './components/web-store/parts/os';
import PSUGenerator from './components/web-store/parts/psu';
import RamGenerator from './components/web-store/parts/ram';

function App() {
  return (
    <>
      <HeaderSection text={["Currently we do not have any data."]} />
      <CaseGenerator></CaseGenerator>
      <CPUGenerator></CPUGenerator>
      <CoolerGenerator></CoolerGenerator>
      <GPUGenerator></GPUGenerator>
      <MotherboardGenerator></MotherboardGenerator>
      <OSGenerator></OSGenerator>
      <PSUGenerator></PSUGenerator>
      <RamGenerator></RamGenerator>
    </>
  )
}

export default App
