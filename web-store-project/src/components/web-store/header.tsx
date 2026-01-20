function HeaderSection({ text }: { text: string[] }) {
    const currentDate = new Date().toLocaleDateString();


    return (
        <section className="header-section">
            <div>
                <img alt="Riot Squad Logo"></img>
            </div>
            <div>
                <h1>
                    Welcome to Riot Squad Hardware It is currently {currentDate}!
                </h1>
            </div>
            <div>
                <input type="search" id="search-bar"/>
                <button>Search</button>
            </div>
            <div>
                <p>
                    {text}
                </p>
            </div>
        </section>
    )
};

export default HeaderSection;