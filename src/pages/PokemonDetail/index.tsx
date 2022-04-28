import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import { useFetchPokemon } from "../../hooks/useFetchPokemon"
import { usePathName } from "../../hooks/usePathName"
import { IPokemon } from "../../types"

const PokemonDetail: React.FC = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const location = useLocation()
  const pokemonName = usePathName(location)
  const state = useContext(AppContext)

  useEffect(() => {
    async function getPokemon(){
      let aspirantToPokemon
      aspirantToPokemon = state?.state.pokemons.find(item => item.name === pokemonName) as IPokemon
      if(!aspirantToPokemon) aspirantToPokemon = await useFetchPokemon(pokemonName as string)
      setPokemon(aspirantToPokemon)
    }

    getPokemon()
  }, [])

  return(
    <section>
      {pokemon ? (
        <h2>{pokemon.name}</h2>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  )
}

export { PokemonDetail }