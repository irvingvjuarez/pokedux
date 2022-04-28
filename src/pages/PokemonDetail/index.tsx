import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import { API } from "../../globals"
import { usePathName } from "../../hooks/usePathName"
import { IPokemon } from "../../types"

const PokemonDetail: React.FC = (): JSX.Element => {
  let pokemon: IPokemon
  const location = useLocation()
  const pokemonName = usePathName(location)
  const state = useContext(AppContext)

  useEffect(() => {
    if(pokemonName){
      pokemon = state?.state.pokemons.find(item => item.name === pokemonName) as IPokemon
      if(pokemon){
        console.log("Existing")
      }else{
        fetch(API + "/" + pokemonName)
        .then(res => res.json())
        .then(data => console.log(data))
      }
    }else{
      console.log("Pokemon does not exist")
    }
  }, [])

  return(
    <section>
      <h2>I am the PokemonDetail page</h2>
    </section>
  )
}

export { PokemonDetail }