import { useContext } from "react"
import { Pokemon } from "../../components/Pokemon"
import { PokemonLoader } from "../../components/PokemonLoader"
import { AppContext } from "../../context/AppContext"
import { LIMIT } from "../../globals"
import { IInitialState } from "../../types"

import { handleFetching } from "./utils"

const Home: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const { state } = initialState
  const LoaderArr = new Array(LIMIT).fill(0)

  return(
    <section className="home">
      <div className="home__head">
        <button onClick={handleFetching(initialState as IInitialState)}>Fetch Data</button>
      </div>

      <div className="pokemon-container">
        {state.pokemons.length ? (
          <>
            {state.pokemons.map(pokemon => (
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
              />
              ))}
          </>
        ) : (
          <>
            {LoaderArr.map(loader => (
              <PokemonLoader key={Math.random()} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export { Home }