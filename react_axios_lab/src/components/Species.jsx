import { useState, useEffect } from 'react'
import axios from 'axios'

const Species = () => {

    const [species, setSpecies] = useState([])

    useEffect(() => {
        const getSpecies = async () => {
            const response = await axios.get(`https://swapi.dev/api/species/`)

            setSpecies(response.data.results)
        }
        getSpecies()
    }, [])

    return (
        <div>
            <h1>This is our Species page</h1>
            <div className="grid">
                {species.map((singleSpecies) => (
                    <div key={singleSpecies.name} className="card">
                        <h3>{singleSpecies.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Species