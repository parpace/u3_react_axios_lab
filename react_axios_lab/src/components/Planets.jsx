import { useState, useEffect } from 'react'
import axios from 'axios'

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
            const response = await axios.get(`https://swapi.dev/api/planets/`)

            setPlanets(response.data.results)
        }
        getPlanets()
    }, [])

    return (
        <div>
            <h1>This is our Planets page</h1>
            <div className="grid">
                {planets.map((planet) => (
                    <div key={planet.name} className="card">
                        <h3>{planet.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planets