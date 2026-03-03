import { useCart } from "../hooks/useCart";
import "./sidebar.css"

function Sidebar() {
    const { items, total, clearAllItems } = useCart();

    return (
        <section className="sidebar-section">
            <h3> Cart </h3>
            <button type="button" onClick={clearAllItems}> Clear Cart </button>
            <table className="cart-items">
                <tbody>
                    {items.map((item, index) =>
                        <tr key={index}>
                            <td className="item-name"> {index + 1}. {item.name}</td>
                            <td className="item-price"> ${item.price}</td>
                        </tr>
                    )}
                    <tr>
                        <td> Total: ${total}</td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
};

export default Sidebar;