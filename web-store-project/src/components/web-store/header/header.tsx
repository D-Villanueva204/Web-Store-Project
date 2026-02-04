import "./header.css"
import logo from "./three.svg";

function HeaderSection() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <section className="header-section">
            <h1>
                Welcome to Riot Squad Hardware
            </h1>
            <h2>
                It is currently {currentDate}!
            </h2>
            <div id="navigation-menu">
                <img alt="Riot Squad Logo" className="logo-container" src={logo}/>
                <input type="text" id="search-bar" placeholder="Search" />
                <button>Search</button>
            </div>
        </section>
    )
};

export default HeaderSection;