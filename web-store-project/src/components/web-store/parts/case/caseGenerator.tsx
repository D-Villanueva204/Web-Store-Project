import cases from '../../../../../json/case.json'

function CaseGenerator() {

    const randomIndex = Math.floor(Math.random() * cases.length);
    const part = cases[randomIndex];
    let price = "Out of Stock";
    let side_panel = "No Side Panel"
    if (part.price) {
        price = `$${part.price}`
    }
    if (part.side_panel){
        side_panel = part.side_panel;
    }
    
    return (
        <section className="case-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Size: {part.type}
            </div>
            <div>
                Colour: {part.color}
            </div>
            <div>
                Side Panel: {side_panel}
            </div>
        </section>
    )
}

export default CaseGenerator;