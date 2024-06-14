import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const StarshipPage = () => {
    const { selectedShipName } = useParams()

    return (
        <div>
            <Link to="/starships">
                <button>Back to Starships</button>
            </Link>
            <h1>Starship Page for {selectedShipName}</h1>
        </div>
    )
}

export default StarshipPage