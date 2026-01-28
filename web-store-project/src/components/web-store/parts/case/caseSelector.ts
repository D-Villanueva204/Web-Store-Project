import cases from '../json/case.json' with { type: "json" };

function CaseSelector(name: string) {

    let pcCase: Case = null;
    for (const retrievedCase of cases) {
        if (retrievedCase.name === name) {
            pcCase = retrievedCase;
            break;
        }
    };

    if (!pcCase.side_panel) {
        pcCase.side_panel = "No Side Panel";
    }

    return pcCase;
}

export interface Case {
    name: string;
    price: number;
    type: string;
    color: string;
    side_panel: string;
    stock: number;
}


export default CaseSelector;