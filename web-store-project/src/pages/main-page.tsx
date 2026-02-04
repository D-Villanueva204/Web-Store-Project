import GeneralSelector from "../components/web-store/parts/general/generalSelector";
import PartTypes from "../components/web-store/parts/general/PartTypes";
import { useState } from "react";
import type { Part } from "../components/web-store/parts/general/PartTypes";

function MainPage({ addItemToCart }: { addItemToCart: (item: Part) => void }) {
    const [selectedPartType, setSelectedPartType] = useState<keyof typeof PartTypes>("CPU");
    const [searchTerm, setSearchTerm] = useState("AMD Ryzen 7 7800X3D");
    const partTypeOptions: (keyof typeof PartTypes)[] = ["CASE", "COOLER", "CPU", "GPU", "MOBO", "PSU", "RAM", "STORAGE", "OS"];
    const [errorMessage, setErrorMessage] = useState("");

    function addToCart(item: Part) {
        if (item.name != "Not Found") {
            setErrorMessage("");
            addItemToCart(item);
        }
        else {
            setErrorMessage("Only valid items can be added to cart");
        }
    }

    function searchForPart(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <h2> Latest Item On Sale: </h2>
                <GeneralSelector name={"ARCTIC Freezer A35 RGB"} partType={PartTypes.COOLER} addItemToCart={addItemToCart} />
            </div>
            <div>
                <h2>
                    Wanna look for a specific part? Take a quick look!
                </h2>
                <form onSubmit={searchForPart}>
                    <select
                        value={selectedPartType}
                        onChange={(e) => setSelectedPartType(e.target.value as keyof typeof PartTypes)}
                    >
                        {partTypeOptions.map(type => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        id="search-bar"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
                <GeneralSelector
                    name={searchTerm}
                    partType={PartTypes[selectedPartType]}
                    addItemToCart={addToCart}
                />
                <h3>
                    {errorMessage}
                </h3>
            </div>
        </div>
    )
}

export default MainPage;