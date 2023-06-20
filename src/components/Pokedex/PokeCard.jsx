import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"



const PokeCard = ({pokem}) => {
   const [pokemon,getPokemonId]=useFetch(pokem)

   useEffect(()=>{
    getPokemonId()
   },[])

   const navigate=useNavigate()
   const handleNavigate=()=>{
    navigate(`/pokedex/${pokemon.name}`)
   }

   console.log(pokemon)
  return (
    
    <article className={`pokecard ${pokemon?.types[0].type.name}`} onClick={handleNavigate} >
        <header className="pokecard_header">
            <img className="pokecard_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="pokecard_section">
          <h3 className="pokecard_name">{pokemon?.name}</h3>
          <ul className="pokecard_type">
            {
              pokemon?.types.map(typeInfo=>(
                <li className="pokecard_items" key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
          
        </section>
        <footer className="pokecard_footer">
            <ul className="pokecard_stats">
              {
                pokemon?.stats.map(statInfo=>(
                  <li className="pokecard_stats_items" key={statInfo.stat.url}><span className="pokecard_info">{statInfo.stat.name}</span>
                  <span className="pokecard_span_base">{statInfo.base_stat}</span>
                  </li>
                ))
              }
            </ul>
          </footer>
    </article>
  )
}

export default PokeCard