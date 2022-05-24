import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { AppContext } from "../../context/AppContext"
import { IInitialState, IPokemon } from "../../types"

import { useFetchPokemon } from "../../hooks/useFetchPokemon"
import { usePathName } from "../../hooks/usePathName"
import { useHelmet } from "../../hooks/useHelmet"

import { Sidebar } from "../../components/Sidebar"
import { ReturnBar } from "../../components/ReturnBar"
import { Photos } from "../../containers/Photos"

const PokemonPhotos: React.FC = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const location = useLocation()
  const pokemonName = usePathName(location)
  const { state: {pokemons} } = useContext(AppContext) as IInitialState

  useEffect(() => {
    async function search4Pokemon(){
      const aspirantToPokemon = pokemons.find(pokemon => pokemon.name === pokemonName) || await useFetchPokemon(pokemonName as string)
      useHelmet(`${aspirantToPokemon.name}'s photos | Pokedux`, "See the art photos of your favorite pokemon")
      setPokemon(aspirantToPokemon)
    }

    search4Pokemon()
  }, [location.pathname])

  return(
    <section className="page pokemon-photos">
      <Sidebar />

      <article className="pokemon-photos__wrapper">
        <ReturnBar />

        {pokemon ? (
          <Photos album={pokemon.sprites} />
        ) : (
          <span>Loading...</span>
        )}
      </article>
    </section>
  )
}

export default PokemonPhotos