import { useContext, useEffect, useRef } from "react"
import { Pokemon } from "../../components/Pokemon"
import { PokemonLoader } from "../../components/PokemonLoader"
import { AppContext } from "../../context/AppContext"
import { LIMIT } from "../../globals"
import { IInitialState } from "../../types"

import { handleFetching } from "./utils"
import { useObserver } from "../../hooks/useObserver"
import { fetchItems } from "../../utils/fetchItems"

const Home: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const { state } = initialState
  const LoaderArr = new Array(LIMIT).fill(0)
  const containerFoot = useRef<null | HTMLDivElement>(null)
  
  useEffect(() => {
    fetchItems(initialState, containerFoot.current as Element)
    // const observer = useObserver(initialState)
    // observer.observe(containerFoot.current as Element)
  }, [])

  // console.log(state.pokemons)

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

        <div ref={containerFoot}></div>
      </div>
    </section>
  )
}

export { Home }