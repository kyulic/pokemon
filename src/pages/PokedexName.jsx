import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const PokedexName = () => {

    const {name}=useParams()
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`

   const [pokemon, getPokemonByName,hasError]= useFetch(url)
   useEffect(()=>{
    getPokemonByName()
   },[name])

   
  return (
    <div>
    {
        hasError
        ? <> <div className="error">
           <img className="pikachu" src="https://img.ecartelera.com/noticias/fotos/46500/46575/1.jpg" alt="pikachu" />
           <h1 className="msj_error">✖️ the pokemon '<span>{name}</span>' doesn't exist</h1>

        </div>
           
        
        </>
        
        :(
            <>
            
            <article className={`pokedexname ${pokemon?.types[0].type.name}`}>
              <header className="pokedexname_header">
              <img className="pokedexname_header" src="../headerpokedex.svg" alt="header pokedex" />
              </header>
              <section className="podexname_section">
              <div className="pokedexname_img_title">
              <img className="img_podexname" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
              </div>
              
              <div className="pokedex_num"><div className="pokedex_h3"> #{pokemon?.id}</div></div>
              
                
                <div className="pokedexname_name">       
                  

                <h2 className="pokedex_name_title">  {pokemon?.name}  </h2>

                
                </div>
                
                <div className="pokedexname_character">
                <ul className="pokedexname_characteristic">
                  <li className="li_character" >weight: <span className="pokedexname_w" >{pokemon?.weight}</span> </li>
                  <li className="li_character" >height:<span className="pokedexname_w" >{pokemon?.height}</span></li>
                </ul>


                </div>
                <div className="name_charact">
                <p className="name_charact_p" >type</p>
                <p className="name_charact_p" >abilities</p>


                </div>
                
                
                <div className="pokedexname_abili_type">
                  
                <ul className="pokedexname_type">
                  {
                    pokemon?.types.map(typeInfo=>(
                      <li className="pokedexname_items" key={typeInfo.type.url}> {typeInfo.type.name}</li>
                    ))
                  }
                </ul>

                <ul className="pokedexname_ability">
                  
                  {
                    pokemon?.abilities.map(abilityInfo=>(
                      <li className="pokedexname_items_ability" key={abilityInfo.ability.url}>{abilityInfo.ability.name}</li>
                    ))
                  }
                </ul>



                </div>

                <footer className="pokedexname_footer">
                  <h3 className="stats">Stats</h3>
            <ul className="pokedexmane_stats">
              {
                pokemon?.stats.map(statInfo=>(
                  <li className="pokedexname_stats_items" key={statInfo.stat.url}><span className="pokedexname_info">{statInfo.stat.name}:</span>
                  <div className="pokedecname_span_base">{statInfo.base_stat}/150</div>
                  <div className="progress">
                  <div className="progress_bar" style={{width:`${(statInfo.base_stat/150)*100}%`}}>
                  </div>

                </div>
                  </li>
                ))
              }
            </ul>
           
          </footer>
            

              </section>

             


            </article>

            <div className="pokedexmane_sec_moves">
              <h2 className="title_move">Movements</h2>
            <div className="pokedexmane_moves">
              {
                pokemon?.moves.map(moveInfo=>(
                  <p className="pokedexname_stats_moves" key={moveInfo.move.url}><span className="pokedexname_info_move">{moveInfo.move.name}</span>
                  </p>
                ))
              }
            </div>
            </div>


            </>
        )
    }
    
    </div>
    
  )
}

export default PokedexName