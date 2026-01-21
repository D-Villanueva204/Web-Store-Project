import "./header.css"

function HeaderSection({ selection }: { selection: string[] }) {
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
            <div id="selection-menu">
                <table>
                    <tbody className="menuButtons">
                        {selection.map(t => <tr>
                            <td> {t}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </section>
    )
};

export default HeaderSection;