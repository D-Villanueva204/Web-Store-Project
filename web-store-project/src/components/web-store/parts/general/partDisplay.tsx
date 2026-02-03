import type { Part } from "./PartTypes";

function PartDisplay({ part }: { part: Part }) {
    return (
        <ul>
            {Object.entries(part).map(([key, value]) => (
                <ul key={key}>
                   <li> {value}</li>
                </ul>
            ))}
        </ul>
    );
}

export default PartDisplay;