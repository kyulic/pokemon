import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import { useSelector } from "react-redux"
import PokeContainer from "../components/Pokedex/PokeContainer"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Pokedex = () => {
  
  const [selectValue, setSelectValue] = useState('all-pokemons')

  // let url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  // const [ pokemons, getAllPokemons, hasError, setPokemons ] = useFetch(url)
  // let url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
 
  const trainerName=useSelector(states=>states.trainerName)
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const urlType='https://pokeapi.co/api/v2/type'
  const [pokemons,getAllPokemon,hasError, setPokemos]=useFetch(url)
  const [types,getAllTypes]=useFetch(urlType)

  useEffect(()=>{
    if(selectValue==='all-pokemons'){
      
      getAllPokemon()
    }else{
      axios.get(selectValue)
      .then(res=>{
        const data={
          results:res.data.pokemon.map(pokeInfo=>pokeInfo.pokemon)
        }
        setPokemos(data)
      })
      .catch(err=>console.log(err))
    }

    
  },[selectValue])

  useEffect(()=>{

    
    getAllTypes()
  },[])

 const searchPokemon= useRef()

 const navigate=useNavigate()

 const handleSumit=(e)=>{
  e.preventDefault()
  const inputValue=(searchPokemon.current.value.trim().toLowerCase())
  navigate(`/pokedex/${inputValue}`)
 }
 const handleChange=(e)=>{
  setSelectValue(e.target.value)
  
 }
  console.log(types)
  return (
    <div className="pokedex_div">
      <header className="pokedex_footer">
        <img className="pokedex_imag_header" src="../headerpokedex.svg" alt="header pokedex" />
      </header>
      <p className="pokedex_welcome">Welcome <span className="pokedex_name">{trainerName}</span> !!!, you canfind your favorite pokemon</p>
      <div className="pokedex_select">
      <form className="pokedex_form" onSubmit={handleSumit} >
        <input className="pokedex_search" ref={searchPokemon} type="text" placeholder="Search Pokemon"/>
        <button className="pokedex_btn">Search</button>
      </form>
      <div className="box_select">
      <select className="select_pokedex" onChange={handleChange}>
        <option  value="all-pokemons">All pokemons</option>
        {
          types?.results.map(typeInfo=>(
            <option value={typeInfo.url}
             key={typeInfo.url}
            >{typeInfo.name}           
            </option>
          ))
        }
        {/* <option value="fire">Fire</option> */}
      </select>



      </div>
      

        
      </div>


    
      <PokeContainer pokemons={pokemons?.results}/>

      {/* <div className="paginacion">
        <a href=""><i class="fa-solid fa-chevron-left"></i></a>
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">6</a>
        <a href=""><i class="fa-solid fa-chevron-right"></i></a>



      </div> */}
    </div>
    
  )
}

export default Pokedex