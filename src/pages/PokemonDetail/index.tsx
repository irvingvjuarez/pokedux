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

const PokemonDetail: React.FC = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const location = useLocation()
  const pokemonID = usePathName(location)
  const { state:{pokemons, notification} } = useContext(AppContext) as IInitialState

  useEffect(() => console.log("Notification", notification), [notification])

  useEffect(() => {
    async function getPokemon(){
      const pokeduxLocalStorage = JSON.parse( window.localStorage.getItem("pokedux") as string ) as IPokemon[]
      const isPokemonInPokedux = pokeduxLocalStorage.find(pokemon => pokemon.name === pokemonID || pokemon.id === Number(pokemonID))

      let aspirantToPokemon
      if(isPokemonInPokedux) {
        aspirantToPokemon = isPokemonInPokedux
      }else{
        aspirantToPokemon = pokemons.find(item => item.name === pokemonID || item.id === Number(pokemonID)) as IPokemon
        if(!aspirantToPokemon) aspirantToPokemon = await useFetchPokemon(pokemonID as string)
      }

      setPokemon(aspirantToPokemon)
    }
    
    getPokemon()

  }, [location.pathname])

  return(
    <section className="pokemon-detail">
      <Sidebar />

      {pokemon ? (
        <div className="pokemon-detail__wrapper">
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
    </section>
  )
}

export { PokemonDetail }