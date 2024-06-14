import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <Link to="/">
                <button>SWAPI</button>
            </Link>
            <Link to="/starships">
                <button>Starships</button>
            </Link>
            <Link to="/films">
                <button>Films</button>
            </Link>
            <Link to="/people">
                <button>People</button>
            </Link>
            <Link to="/planets">
                <button>Planets</button>
            </Link>
            <Link to="/species">
                <button>Species</button>
            </Link>
            <Link to="/vehicles">
                <button>Vehicles</button>
            </Link>
        </div>
    )
}

export default Nav
