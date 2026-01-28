import HeaderSection from "../components/web-store/header/header";
import GPUGenerator from "../components/web-store/parts/gpu/gpuGenerator";

function MainPage() {

    return (
        <div>
            <HeaderSection selection={["Menu", "Sales", "About Us", "Compatibility Checker"]} />
            <GPUGenerator />
        </div>
    )
}

export default MainPage;