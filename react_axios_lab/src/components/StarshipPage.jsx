import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const StarshipPage = (props) => {

    const [starship, setStarships] = useState('')

    const { selectedShipName } = useParams()

    useEffect(() => {
        let selectedStarship = props.starships.find((starship) => starship.name === selectedShipName)
        setStarships(selectedStarship)
    }, [props.mailboxes, selectedShipName])

    return starship ? (
        <div>
            <Link to="/starships">
                <button>Back to Starships</button>
            </Link>
            <h1>Starship Page for {starship.name}</h1>
        </div>
    ) : (
        <h1>Starship Not Found</h1>
    )
}

export default StarshipPage