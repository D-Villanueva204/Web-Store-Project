import PartSelector from "../components/web-store/parts/general/partSelector";
import PartType from "../../../shared/types/PartTypes";
import { useState } from "react";
import type { Part } from "../../../shared/types/PartTypes";
import "./main-page.css"
import { usePartSearch } from "../hooks/usePartSearch";
import { SearchBar } from "../components/web-store/searchbar/searchbar";

/**
 * Dominique Villanueva
 * 
 * This component simply uses the new Part type. No other adjustments.
 * 
 */
function MainPage({ addItemToCart }: { addItemToCart: (item: Part) => void }) {
    const [selectedPartType, setSelectedPartType] = useState<keyof typeof PartType>("CPU");
    const [submittedSearch, setSubmittedSearch] = useState("AMD Ryzen 7 7800X3D");
    const [searchMessages, setSearchMessages] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const { searchValue, setSearchValue, trySearch } = usePartSearch();
        const partTypeOptions: (keyof typeof PartType)[] = ["CASE", "COOLER", "CPU", "GPU", "MOBO", "PSU", "RAM", "STORAGE", "OS"];
    function addToCart(item: Part) {
        if (item.name != "Not Found") {
            setErrorMessage("");
            addItemToCart(item);
        }
        else {
            setErrorMessage("Only valid items can be added to cart");
        }
    }


    const doSearch = () => {
        const validation = trySearch();
        if (validation.isValid) {
            setSubmittedSearch(searchValue);
            setSearchMessages([]);
        } else {
            setSearchMessages(validation.errors);
        }
    }

    return (
        <div className="main-page">
            <div className="main-page-section">
                <p className="section-label">Featured</p>
                <h2 className="section-heading">Latest item on sale</h2>
                <hr className="section-divider" />
                <PartSelector name={"Cooler Master Hyper 212 Black Edition"} partType={PartType.COOLER} addItemToCart={addItemToCart} />
            </div>
            <div className="main-page-section">
                <p className="section-label">Search</p>
                <h2 className="section-heading">Looking for something?</h2>
                <hr className="section-divider" />
                <div className="search-row">
                    <select
                        value={selectedPartType}
                        onChange={(e) => setSelectedPartType(e.target.value as keyof typeof PartType)}
                    >
                        {partTypeOptions.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <SearchBar
                        searchValue={searchValue}
                        messages={searchMessages}
                        handleSearchChange={setSearchValue}
                        handleSubmit={doSearch}
                    />
                </div>
                <PartSelector name={submittedSearch} partType={PartType[selectedPartType]} addItemToCart={addToCart} />
                <h3>{errorMessage}</h3>
            </div>
        </div>
    )
}

export default MainPage;