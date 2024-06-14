import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StarshipList = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships = async () => {
            const response = await axios.get(`https://swapi.dev/api/starships`)

            setStarships(response.data.results)
        }
        getStarships()
    }, [])

    return (
        <div>
            <h1>This is our starships page</h1>
            <div className="grid">
                {starships.map((starship) => (
                    <Link key={starship.name} to={`/starships/${starship.name}`}>
                        <div className="card">
                            <h3>{starship.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default StarshipList