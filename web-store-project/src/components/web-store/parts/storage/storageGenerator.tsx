import storage from '../json/storage.json'

function StorageGenerator() {
    const randomIndex = Math.floor(Math.random() * storage.length);
    const part = storage[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }
    return (
        <section className="storage-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Capacity: {part.capacity}
            </div>
            <div>
                Type: {part.type}
            </div>
        </section>
    )
}
export default StorageGenerator;