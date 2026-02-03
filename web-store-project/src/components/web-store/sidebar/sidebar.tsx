import type { Part } from "../parts/general/PartTypes";

function Sidebar({ items, clearCart }: { items: Part[], clearCart: () => void}) {
    return (
        <section className="sidebar-section">
            <h3> Cart </h3>
            <button type="button" onClick={clearCart}> Clear Cart </button>
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