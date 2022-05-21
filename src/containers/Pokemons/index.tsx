import { useContext, useEffect, useRef, Fragment, useMemo } from "react"
import { AppContext } from "../../context/AppContext"
import { IInitialState } from "../../types"
import { fetchItems } from "../../utils/fetchItems"

import Pokemon from "../../components/Pokemon"
import { PokemonSkeleton } from "../../skeletons/Pokemon"
import { useObserver } from "../../hooks/useObserver"
import { ARR } from "../../globals"


const Pokemons: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const { state:{pokemons} } = initialState
  const visorRef = useRef<HTMLDivElement | null>(null)
  const observer = useObserver(initialState)

  useEffect(() => {
    if(!pokemons.length) fetchItems(initialState)
    observer.observe(visorRef.current as HTMLDivElement)
  }, [])

  return(
    <section className="pokemons">
      <div className="pokemons-container" >
        {pokemons.length > 1 ? (
          <Fragment>
            {pokemons.map(pokemon => (
              <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                data={pokemon} />
            ))}
          </Fragment>
        ) : (
          <Fragment>
            {ARR.map(item => <PokemonSkeleton key={item} />)}
          </Fragment>
        )}
      </div>

      <div className="visor hidden pokemons-container" ref={visorRef}>
        {ARR.map(item => <PokemonSkeleton key={item} />)}
      </div>
    </section>
  )
}

export { Pokemons }