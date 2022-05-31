import { useContext, useEffect, useRef, useMemo } from "react"
import { AppContext } from "../../context/AppContext"
import { IInitialState } from "../../types"
import { fetchItems } from "../../utils/fetchItems"

import Pokemon from "../../components/Pokemon"
import PokemonSkeleton from "../../skeletons/Pokemon"
import { useObserver } from "../../hooks/useObserver"
import { ARR } from "../../globals"

const Pokemons: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const pokemons = useMemo(() => [...initialState.state.pokemons], [initialState.state.pokemons])
  const observer = useObserver(initialState)
  const visorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(!pokemons.length) fetchItems(initialState)
    observer.observe(visorRef.current as HTMLDivElement)
  }, [])

  return(
    <section className="pokemons">
      <div className="pokemons-container" >
        {pokemons.length > 1 ? (
          <>
            {pokemons.map(pokemon => (
              <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                data={pokemon} />
            ))}
          </>
        ) : (
          <>
            {ARR.map(item => <PokemonSkeleton id={item} key={item} />)}
          </>
        )}
      </div>

      <div className="visor hidden pokemons-container" ref={visorRef}>
        {ARR.map(item => <PokemonSkeleton id={item} key={item} />)}
      </div>

      <span className="pokemons__error-msg">
        Sorry. The content cannot be loaded, there has been an error.
      </span>
    </section>
  )
}

export { Pokemons }