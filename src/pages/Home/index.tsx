import { useContext } from "react"
import { Pokemon } from "../../components/Pokemon"
import { AppContext } from "../../context/AppContext"
import { IInitialState } from "../../types"

import { handleFetching } from "./utils"

const Home: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext)

  return(
    <section className="home">
      <div className="home__head">
        <button onClick={handleFetching(initialState as IInitialState)}>Fetch Data</button>
      </div>

      <div className="pokemon-container">
        {initialState?.state.pokemons.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        ))}
      </div>
    </section>
  )
}

export { Home }