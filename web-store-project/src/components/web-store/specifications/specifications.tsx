import "./specifications.css"
function PartSpecifications () {
    return (
        <section className="Part-specifications"> 
            <div>
                <h2>Part Specifications</h2>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>AMD Ryzen 7 7800X3D</td>
                    </tr>
                    <tr>
                        <th>Series</th>
                        <td>Ryzen 7000 Series</td>
                    </tr>
                    <tr>
                        <th>Core Count</th>
                        <td>8 Cores</td>
                    </tr>
                    <tr>
                        <th>Thread Count</th>
                        <td>16 Threads</td>
                    </tr>
                    <tr> 
                        <th>Base Clock</th>
                        <td>4.2 GHz</td>
                    </tr>
                    <tr>
                        <th>Boost Clock</th>
                        <td>5 GHz</td>
                    </tr>
                </table>
            </div>
        </section>
    );
}

export default PartSpecifications;