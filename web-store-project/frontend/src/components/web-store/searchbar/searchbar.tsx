// This code has been modified from the Complexicion project.
// Original source: github.com/zMontreuilRRC/full-stack-demo
export function SearchBar({searchValue, messages, handleSearchChange, handleSubmit}
    : {
        searchValue: string, 
        messages: string[],
        handleSearchChange: (newValue: string) => void,
        handleSubmit: () => void
    }) {
    return(
        <form className="search-form">
            {/* Note use of closing tags on inputs */}
            <input type="text" 
                name="field-term" 
                placeholder="Search up a part!" 
                value={searchValue}
                onChange={e => handleSearchChange(e.target.value)}
            />
            { messages?.map((message, index) => 
                <div 
                    className="error"
                    key={index}
                >
                    {message}
                </div>
            )}
            <button onClick={e => {
                e.preventDefault();
                 handleSubmit()
                }}>
                    Search
            </button>
        </form>
    );
}