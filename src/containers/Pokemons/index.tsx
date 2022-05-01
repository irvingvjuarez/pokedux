import { useContext, useEffect, useRef, Fragment } from "react"
import { AppContext } from "../../context/AppContext"
import { IInitialState } from "../../types"
import { fetchItems } from "../../utils/fetchItems"

import { Pokemon } from "../../components/Pokemon"
import { useObserver } from "../../hooks/useObserver"


const Pokemons: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const { state:{pokemons, api}, addPokemons } = initialState
  const visorRef = useRef<HTMLDivElement | null>(null)
  const observer = useObserver(addPokemons, api)

  useEffect(() => {
    if(!pokemons.length) fetchItems(initialState)
    observer.observe(visorRef.current as HTMLDivElement)
  }, [api])

  return(
    <Fragment>
      <div className="pokemons-container" >
        {pokemons.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            data={pokemon} />
        ))}
      </div>

      <div className="visor" ref={visorRef}></div>
    </Fragment>
  )
}

export { Pokemons }