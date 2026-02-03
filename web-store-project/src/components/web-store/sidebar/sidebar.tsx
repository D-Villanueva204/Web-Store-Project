import type { Part } from "../parts/general/PartTypes";

function Sidebar({ items }: { items: Part[] }) {
    return (
        <section className="sidebar-section">
            <h3> Cart </h3>
            <table>
                <tbody>
                    {items.map((item, index) =>
                        <tr key={index}>
                            <td> {index+1}. {item.name}</td>
                            <td> ${item.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </section>
    )
};

export default Sidebar;