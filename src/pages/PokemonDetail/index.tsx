import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { AppContext } from "../../context/AppContext"
import { useFetchPokemon } from "../../hooks/useFetchPokemon"
import { usePathName } from "../../hooks/usePathName"

import { IInitialState, IPokemon } from "../../types"

import { Section } from "../../components/Section"
import { Carousel } from "../../components/Carousel"
import { Media } from "../../components/Media"
import { Tags } from "../../components/Tags"
import { PokemonPicture } from "../../components/PokemonPicture"
import { Sidebar } from "../../components/Sidebar";
import { StandarButton } from "../../components/StandarButton";

import { PokemonDetailSk } from "../../skeletons/PokemonDetailSk";
import { ReturnBar } from "../../components/ReturnBar"

const PokemonDetail: React.FC = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const location = useLocation()
  const pokemonID = usePathName(location)
  const { state:{pokemons}, addSinglePokemon } = useContext(AppContext) as IInitialState

  useEffect(() => {
    async function getPokemon(){
      /** 
       * Here a comprobation to know if the pokemon exists in the LocalStorage 
       * If so, setPokemon(isPokemonInPokedux) is performed
      * */
      const pokeduxLocalStorage = JSON.parse( window.localStorage.getItem("pokedux") as string ) as IPokemon[]
      const isPokemonInPokedux = pokeduxLocalStorage.find(pokemon => pokemon.name === pokemonID || pokemon.id === Number(pokemonID))
      if(isPokemonInPokedux) setPokemon(isPokemonInPokedux)

      /**
       * If not, a fetch to that specific pokemon is performed and the pokemons of the 
       * global state is updated, updating this useEffect and re-rendering the whole component
      */

      if(!isPokemonInPokedux) {
        let aspirantToPokemon = pokemons.find(item => item.name === pokemonID || item.id === Number(pokemonID)) as IPokemon
        if(aspirantToPokemon) setPokemon(aspirantToPokemon)
        if(!aspirantToPokemon) {
          aspirantToPokemon = await useFetchPokemon(pokemonID as string)
          addSinglePokemon(aspirantToPokemon)
        }
      }
    }
    
    getPokemon()

  }, [location.pathname, pokemons])

  return(
    <section className="pokemon-detail">
      <Sidebar />

      <div className="pokemon-detail__wrapper">
        <ReturnBar />

        {pokemon ? (
          <div>
            <div className="pokemon-detail__background">
              <PokemonPicture
                front={pokemon.sprites.other.dream_world.front_default}
                back={pokemon.sprites.back_default}
                alt={pokemon.name}
                containerSide="82px"
                isProfilePicture={true} />
            </div>

            <nav className="pokemon-detail__head">
              <Media profile={pokemon.name} />
              <StandarButton
                text={pokemon.isInPokedex ? "Release it" : "Catch it"}
                target={pokemon} />
            </nav>

            <div className="pokemon-detail__title">
              <h2>{pokemon.name}</h2>
              <Tags list={pokemon.types}/>
            </div>

            <Section 
              title="Overall information" 
              list={[
                {base_stat: pokemon.base_experience, stat: { name: "Experience" }},
                {base_stat: pokemon.height, stat: { name: "Height" }},
                {base_stat: pokemon.weight, stat: { name: "Weight" }},
                ...pokemon.stats,
              ]}
              isStat={true}
            />

            <Carousel
              title="Photos"
              imagesList={pokemon.sprites}
              url={`/pokemon/${pokemon.name}/photos`} />
            <Section title="Abilities" list={pokemon.abilities} />
            <Section title="Movements" list={pokemon.moves} />
          </div>
        ) : (
          <PokemonDetailSk />
        )}
      </div>
    </section>
  )
}

export { PokemonDetail }