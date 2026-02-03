import "./header.css"

function HeaderSection() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <section className="header-section">
            <h1>
                Welcome to Riot Squad Hardware It is currently {currentDate}!
            </h1>
            <div id="navigation-menu">
                <img alt="Riot Squad Logo" className="logo-container" />
                <input type="text" id="search-bar" placeholder="Search" />
                <button>Search</button>
            </div>
        </section>
    )
};

export default HeaderSection;