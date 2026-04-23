import "./header.css"
import logo from "./three.svg";
import { usePartSearch } from "../../../hooks/usePartSearch";
import type { Part } from "../../../../../shared/types/PartTypes";

function HeaderSection({ addItemToCart }: { addItemToCart: (item: Part) => void }) {
    const { query, setQuery, results, isOpen, closeDropdown } = usePartSearch();

    function handleAddToCart(part: Part) {
        addItemToCart(part);
        closeDropdown();
    }

    const currentDate = new Date().toLocaleDateString('en-US');

    return (
        <header className="header-container">
            <div className="logo-wrapper">
                <img src={logo} alt="Riot Squad Logo" className="header-logo" />
            </div>
            <div className="header-titles">
                <h1>Welcome to Riot Squad Hardware</h1>
                <p className="date-subtitle">It is currently {currentDate}!</p>
            </div>
            <div className="header-search">
                <input
                    type="text"
                    placeholder="Search components..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {isOpen && results.length > 0 && (
                    <ul className="typeahead-dropdown">
                        {results.map(part => (
                            <li key={part.id} className="typeahead-item">
                                <span className="typeahead-name">{part.name}</span>
                                <span className="typeahead-price">${part.price}</span>
                                <button onClick={() => handleAddToCart(part)}>Add to Cart</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    )
}

export default HeaderSection;