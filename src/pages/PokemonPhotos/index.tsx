import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { AppContext } from "../../context/AppContext"
import { IInitialState, IPokemon } from "../../types"

import { useFetchPokemon } from "../../hooks/useFetchPokemon"
import { usePathName } from "../../hooks/usePathName"

import { Sidebar } from "../../components/Sidebar"
import { Photos } from "../../containers/Photos"

const PokemonPhotos: React.FC = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const location = useLocation()
  const pokemonName = usePathName(location)
  const { state: {pokemons} } = useContext(AppContext) as IInitialState

  useEffect(() => {
    async function search4Pokemon(){
      const aspirantToPokemon = pokemons.find(pokemon => pokemon.name === pokemonName) || await useFetchPokemon(pokemonName as string)
      setPokemon(aspirantToPokemon)
      console.log(pokemon?.sprites)
    }

    search4Pokemon()
  }, [location.pathname])

  return(
    <section className="page pokemon-photos">
      <Sidebar />

      {pokemon ? (
        <Photos />
      ) : (
        <span>Loading...</span>
      )}
    </section>
  )
}

export { PokemonPhotos }