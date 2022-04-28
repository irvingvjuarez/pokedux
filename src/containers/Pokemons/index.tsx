import { AppContext } from "../../context/AppContext"
import { useContext, useEffect, useRef } from "react"
import { IInitialState } from "../../types"
import { Pokemon } from "../../components/Pokemon"
import { fetchItems } from "../../utils/fetchItems"
import { observer } from "../../utils/observer"

const Pokemons: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const { state:{pokemons} } = initialState
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(!pokemons.length) fetchItems(initialState)
  }, [])

  return(
    <div
      className="pokemons-container"
      ref={containerRef} >
      {pokemons.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          data={pokemon} />
      ))}
    </div>
  )
}

export { Pokemons }