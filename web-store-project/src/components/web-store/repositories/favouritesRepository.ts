import type { Favourites } from "../types/favouritesType";

let faovouritesData: Favourites[] = [
      { id: "1000", name: "NVIDIA RTX 4090", price: 1599.99, stock: 12, favourited: true },
  { id: "1002", name: "AMD Ryzen 9 7950X", price: 699.99, stock: 0, favourited: false },
  { id: "1003", name: "Samsung 990 Pro 2TB SSD", price: 179.99, stock: 45, favourited: true },
  { id: "1004", name: "Corsair Vengeance 32GB DDR5", price: 109.99, stock: 8, favourited: false },
  { id: "1005", name: "ASUS ROG Strix Z790-E", price: 489.99, stock: 3, favourited: true },
  { id: "1006", name: "Noctua NH-D15 CPU Cooler", price: 99.99, stock: 0, favourited: false },
  { id: "1007", name: "Seasonic Focus GX-850W PSU", price: 139.99, stock: 21, favourited: false },
  { id: "1008", name: "Fractal Design Torrent Case", price: 189.99, stock: 7, favourited: true },
  { id: "1009", name: "WD Black SN850X 1TB NVMe", price: 99.99, stock: 33, favourited: false },
  { id: "1010", name: "AMD Radeon RX 7900 XTX", price: 899.99, stock: 5, favourited: true },
]


export function getFavourites(): Favourites[] {
    return faovouritesData.filter(part => part.favourited === true);
}

export function getFavouriteById(id: string): Favourites {
    const foundFavourite = faovouritesData.find(part => part.id === id);

    if (!foundFavourite) {
        throw new Error(`Favourite with id ${id} not found.`);
    }
    return foundFavourite;
}

export function createFavourites(id: string, name: string, price: number, stock: number, favourited: boolean) {
    const foundFavourite = faovouritesData.find(part => part.id === id);

    if (!foundFavourite) {
        faovouritesData.push({ id, name, price, stock, favourited });
    } else {
        throw new Error(`Favourite with id ${id} already exists.`);
    }
} 

export function deleteFavourites(id: string) {
    const foundFavourite = faovouritesData.find(part => part.id === id);

    if (!foundFavourite) {
        throw new Error(`Favourite with id ${id} does not exist.`);
    } else {
        foundFavourite.favourited = false;
    }

}