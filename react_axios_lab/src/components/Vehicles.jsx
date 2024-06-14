import { useState, useEffect } from 'react'
import axios from 'axios'

const Vehicles = () => {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
            const response = await axios.get(`https://swapi.dev/api/vehicles/`)

            setVehicles(response.data.results)
        }
        getVehicles()
    }, [])

    return (
        <div>
            <h1>This is our Vehicles page</h1>
            <div className="grid">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.name} className="card">
                        <h3>{vehicle.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehicles