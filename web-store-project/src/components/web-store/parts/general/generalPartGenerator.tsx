import PartTypes from "./PartTypes";
import GeneralTypeGenerator from "./generalTypeGenerator"

function GeneralPartGenerator() {
    const values = Object.keys(PartTypes);
    const randomPartType = values[Math.floor(Math.random() * values.length)];

    return (
        <section>
            <GeneralTypeGenerator partType={PartTypes[randomPartType]} />
            <p>
                Type: {randomPartType}
            </p>
        </section>
    )
};

export default GeneralPartGenerator;