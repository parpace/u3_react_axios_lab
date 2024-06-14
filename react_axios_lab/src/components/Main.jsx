import { Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import Films from './Films'
import Planets from './Planets'
import People from './People'
import Species from './Species'
import Vehicles from './Vehicles'
import StarshipPage from './StarshipPage'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/starships' element={<StarshipList/>}/>
                <Route path='/films' element={<Films/>}/>
                <Route path='/planets' element={<Planets/>}/>
                <Route path='/people' element={<People/>}/>
                <Route path='/species' element={<Species/>}/>
                <Route path='/vehicles' element={<Vehicles/>}/>
                <Route path='/starships/:selectedShipName' element={<StarshipPage/>}/>
            </Routes>
        </div>
    )
}

export default Main