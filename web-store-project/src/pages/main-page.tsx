import HeaderSection from "../components/web-store/header/header";
import GeneralTypeGenerator from "../components/web-store/parts/general/generalTypeGenerator";
import GeneralPartGenerator from "../components/web-store/parts/general/generalPartGenerator";
import GeneralSelector from "../components/web-store/parts/general/generalSelector";
import PartTypes from "../components/web-store/parts/general/PartTypes";


function MainPage() {

    return (
        <div>
            <HeaderSection selection={["Parts", "Sales", "About Us", "Compatibility Checker"]} />
            <div>
                <h2> Latest Item On Sale: </h2>
            </div>
            <div>
                <GeneralTypeGenerator partType={PartTypes.COOLER}/>
            </div>
            <div>
                <GeneralSelector name={"ARCTIC Freezer A35 RGB"} partType={PartTypes.COOLER}/>
            </div>
            <GeneralPartGenerator/>
        </div>
    )
}

export default MainPage;