import type { Part } from "../parts/general/PartTypes";
import "./sidebar.css"

function Sidebar({ items, clearCart, total }: { items: Part[], clearCart: () => void, total: number }) {
    return (
        <section className="sidebar-section">
            <h3> Cart </h3>
            <button type="button" onClick={clearCart}> Clear Cart </button>
            <table className="cart-items">
                <tbody>
                    {items.map((item, index) =>
                        <tr key={index}>
                            <td className="item-name"> {index + 1}. {item.name}</td>
                            <td className="item-price"> ${item.price}</td>
                        </tr>
                    )}
                    <tr>
                        <td> Total: ${total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
};

export default Sidebar;