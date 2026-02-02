import { useState } from "react";
import categoryMap, { loadCategory } from "../components/web-store/product_selector/product_selector";

function ProductPage() {
    const [products, setProducts] = useState<any[]>([]);
    const categories = ["CASE", "COOLER", "CPU", "GPU", "MOBO", "PSU", "RAM", "STORAGE", "OS"];

    return (
        <div>
            <h2>
                Browse Parts
            </h2>
            <select onChange={(e) => setProducts(loadCategory(e.target.value))}>
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <div>
                {products.map((product, index) => (
                    <div key={index}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>In stock: {product.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductPage;