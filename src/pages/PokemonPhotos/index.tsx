import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar"
import { AppContext } from "../../context/AppContext"
import { useFetchPokemon } from "../../hooks/useFetchPokemon"
import { usePathName } from "../../hooks/usePathName"
import { IInitialState, IPokemon } from "../../types"

const PokemonPhotos: React.FC = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const location = useLocation()
  const pokemonName = usePathName(location)
  const { state: {pokemons} } = useContext(AppContext) as IInitialState

  useEffect(() => {
    async function search4Pokemon(){
      const aspirantToPokemon = pokemons.find(pokemon => pokemon.name === pokemonName) || await useFetchPokemon(pokemonName as string)
      setPokemon(aspirantToPokemon)
    }

    search4Pokemon()
  }, [location.pathname])

  return(
    <section className="page pokemon-photos">
      <Sidebar />

      {pokemon ? (
        <h2>We have pokemon!!</h2>
      ) : (
        <span>Loading...</span>
      )}
    </section>
  )
}

export { PokemonPhotos }