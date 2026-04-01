export interface Favourites {
    id: string
    partId: string
    part: {
        id: string
        name: string
        price: number
        stock: number
        partType: string
    }
}