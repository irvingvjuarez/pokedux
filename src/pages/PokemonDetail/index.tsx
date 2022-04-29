import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import { useFetchPokemon } from "../../hooks/useFetchPokemon"
import { usePathName } from "../../hooks/usePathName"
import { IPokemon } from "../../types"
import { Section } from "./Section"
import { Media } from "../../components/Media"

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
    <section className="pokemon-detail">
      {pokemon ? (
        <div className="pokemon-detail__wrapper">
          <div className="pokemon-detail__background">
            <div className="pokemon-detail__picture">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name} />
            </div>
          </div>

          <nav className="pokemon-detail__head">
            <Media />

            <button className="pokemon-detail__cta">
              Catch it
            </button>
          </nav>

          <div className="pokemon-detail__title">
            <h2>{pokemon.name}</h2>
            <ul className="pokemon-detail__types">
              {pokemon.types.map(type => (
                <li
                  className="pokemon-detail__type"
                  key={type.type.name} >{type.type.name}</li>
              ))}
            </ul>
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

          <Section title="Movements" list={pokemon.moves} />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  )
}

export { PokemonDetail }