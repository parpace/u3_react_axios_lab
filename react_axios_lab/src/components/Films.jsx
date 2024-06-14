import { useState, useEffect } from 'react'
import axios from 'axios'

const Films = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const response = await axios.get(`https://swapi.dev/api/films/`)

            setFilms(response.data.results)
        }
        getFilms()
    }, [])

    return (
        <div>
            <h1>This is our Films page</h1>
            <div className="grid">
                {films.map((film) => (
                    <div key={film.title} className="card">
                        <h3>{film.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Films