import PartSelector from "../components/web-store/parts/general/partSelector";
import PartType from "../../../shared/types/PartTypes";
import { useState } from "react";
import type { Part } from "../../../shared/types/PartTypes";

/**
 * Dominique Villanueva
 * 
 * This component simply uses the new Part type. No other adjustments.
 * 
 */
function MainPage({ addItemToCart }: { addItemToCart: (item: Part) => void }) {
    const [selectedPartType, setSelectedPartType] = useState<keyof typeof PartType>("CPU");
    const [searchTerm, setSearchTerm] = useState("AMD Ryzen 7 7800X3D");
    const partTypeOptions: (keyof typeof PartType)[] = ["CASE", "COOLER", "CPU", "GPU", "MOBO", "PSU", "RAM", "STORAGE", "OS"];
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
                <PartSelector name={"ARCTIC Liquid Freezer III Pro 360"} partType={PartType.COOLER} addItemToCart={addItemToCart} />
            </div>
            <div>
                <h2>
                    Wanna look for a specific part? Take a quick look!
                </h2>
                <form onSubmit={searchForPart}>
                    <select
                        value={selectedPartType}
                        onChange={(e) => setSelectedPartType(e.target.value as keyof typeof PartType)}
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
                <PartSelector
                    name={searchTerm}
                    partType={PartType[selectedPartType]}
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