function Sidebar({ items }: { items: string[] }) {
        return (
            <section className="sidebar-section">
                <div>
                    {items.map(item => (
                        <p> {item}</p>
                    ))}
                </div>
            </section>
        )
};

export default Sidebar;