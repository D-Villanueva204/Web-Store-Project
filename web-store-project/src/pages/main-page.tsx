import GeneralTypeGenerator from "../components/web-store/parts/general/generalTypeGenerator";
import GeneralSelector from "../components/web-store/parts/general/generalSelector";
import PartTypes from "../components/web-store/parts/general/PartTypes";
import { useState } from "react";

function MainPage({addItemToCart}: {addItemToCart: (item: string) => void}) {

    const [selectedPartType, setSelectedPartType] = useState("COOLER");
    const partTypeOptions = ["GPU", "CPU", "COOLER", "MOBO", "PSU", "RAM", "STORAGE"];

    return (
        <div>
            <div>
                <h2> Latest Item On Sale: </h2>
                <GeneralSelector name={"ARCTIC Freezer A35 RGB"} partType={PartTypes.COOLER} addItemToCart={addItemToCart}/>
            </div>
            <div>
                <h2>
                    Wanna look for a specific part? Take a quick look!
                </h2>
                <select
                    value={selectedPartType}
                    onChange={e => setSelectedPartType(e.target.value)}
                >
                    {partTypeOptions.map(type => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <GeneralTypeGenerator partType={PartTypes[selectedPartType]} addItemToCart={addItemToCart}/>
            </div>
        </div>
    )
}

export default MainPage;