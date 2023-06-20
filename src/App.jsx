
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokedexName from './pages/PokedexName'
import './components/Pokedex/stiles/pokeCard.css'
import './pages/stiles/pokedex.css'
import './pages/stiles/pokedexname.css'
function App() {
  

  return (
    <div> 

      {/* https://pokeapi.co/ */}
      {/* <h1>POKEDEX</h1> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:name' element={<PokedexName/>}/>
        </Route>


      </Routes>
    </div>
  )
}

export default App
