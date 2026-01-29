import HeaderSection from "../components/web-store/header/header";
import GeneralSelector from "../components/web-store/parts/general/generalGenerator";


function MainPage() {

    return (
        <div>
            <HeaderSection selection={["Parts", "Sales", "About Us", "Compatibility Checker"]} />
            <div>
                <h2> Latest Item On Sale: </h2>
            </div>
            <div>
                <GeneralSelector/>
            </div>
        </div>
    )
}

export default MainPage;