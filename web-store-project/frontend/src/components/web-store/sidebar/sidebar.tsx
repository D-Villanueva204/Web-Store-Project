
import type { CartItem } from "../../../../../shared/types/CartItem";
import "./sidebar.css"

/**
 * Dominique Villanueva:
 * 
 * Sidebar now is refactored to make sure of the useCart hook functions,
 * now using CartItem instead of Part.
 * The only major difference is that total is no longer calculated.
 * 
 */


function Sidebar({ items, total, clearAllItems }: { items: CartItem[], total: number, clearAllItems: () => void }) {
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
                            <td className="item-quantity"> Quantity: {item.quantity} </td>
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