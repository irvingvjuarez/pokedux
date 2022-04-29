import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import { useFetchPokemon } from "../../hooks/useFetchPokemon"
import { usePathName } from "../../hooks/usePathName"
import { IPokemon } from "../../types"
import { Dropdown } from "../../components/Dropdown"

import Linkedin from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"
import Github from "../../assets/github.png"

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
            <ul className="pokemon-detail__media">
              <li><img src={Linkedin} alt="linkedin" /></li>
              <li><img src={Github} alt="github" /></li>
              <li><img src={Twitter} alt="twitter" /></li>
            </ul>

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

          <div className="pokemon-detail__section pokemon-detail__overall">
            <h2>Overall information</h2>
            <Dropdown
              list={[
                {base_stat: pokemon.base_experience, stat: { name: "Experience" }},
                {base_stat: pokemon.height, stat: { name: "Height" }},
                {base_stat: pokemon.weight, stat: { name: "Weight" }},
                ...pokemon.stats,
              ]}
              isStat={true} />
          </div>

          <div className="pokemon-detail__section pokemon-detail__overall">
            <h2>Movements</h2>
            <Dropdown
              list={pokemon.moves} />
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  )
}

export { PokemonDetail }