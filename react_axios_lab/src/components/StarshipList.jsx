import { Link } from 'react-router-dom'

const StarshipList = (props) => {

    return (
        <div>
            <h1>This is our starships page</h1>
            <div className="grid">
                {props.starships.map((starship) => (
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