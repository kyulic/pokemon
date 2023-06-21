import PokeCard from "../Pokedex/PokeCard"



const PokeContainer = ({pokemons}) => {
    console.log(pokemons)
  return (
    <div className="pokecontainer_card">
        { 
            pokemons?.map(pokem=>(
                <PokeCard
                key={pokem.url}
                pokem={pokem.url}
                
                />
            ))
        }


    </div>
    
  )
}

export default PokeContainer