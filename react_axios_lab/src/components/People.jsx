import { useState, useEffect } from 'react'
import axios from 'axios'

const People = () => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        const getPeople = async () => {
            const response = await axios.get(`https://swapi.dev/api/people/`)

            setPeople(response.data.results)
        }
        getPeople()
    }, [])

    return (
        <div>
            <h1>This is our People page</h1>
            <div className="grid">
                {people.map((person) => (
                    <div key={person.name} className="card">
                        <h3>{person.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default People