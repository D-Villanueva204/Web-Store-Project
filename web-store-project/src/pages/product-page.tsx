import { useState } from "react";
import GeneralTypeGenerator from "../components/web-store/parts/general/partRandomizer";
import type { Part } from "../components/web-store/repositories/PartTypes";
import PartTypes from "../components/web-store/repositories/PartTypes";

function ProductPage({ addItemToCart, addFavourite }: { addItemToCart: (item: Part) => void, addFavourite: (id: string) => void }) {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof PartTypes>("CPU");
    const categories = ["CASE", "COOLER", "CPU", "GPU", "MOBO", "PSU", "RAM", "STORAGE", "OS"];


    return (
        <div>
            <h2>Browse Parts</h2>
            <select onChange={(e) => setSelectedCategory(e.target.value as keyof typeof PartTypes)}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <div>
                <GeneralTypeGenerator partType={PartTypes[selectedCategory]} addItemToCart={addItemToCart} addFavourite={addFavourite} favourite={true} />
                <GeneralTypeGenerator partType={PartTypes[selectedCategory]} addItemToCart={addItemToCart} addFavourite={addFavourite} favourite={true} />
                <GeneralTypeGenerator partType={PartTypes[selectedCategory]} addItemToCart={addItemToCart} addFavourite={addFavourite} favourite={true} />
            </div>
            <div>
                {/* <StarRating iconSize={50} defaultRating={defaultRating} /> */}
            </div>
        </div>
    )
}
export default ProductPage;