import HeaderSection from "../components/web-store/header/header";
import GeneralGenerator from "../components/web-store/parts/general/generalGenerator";
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
                <GeneralGenerator/>
            </div>
            <div>
                <GeneralSelector name={"ARCTIC Freezer A35 RGB"} partType={PartTypes.COOLER}/>
            </div>
        </div>
    )
}

export default MainPage;