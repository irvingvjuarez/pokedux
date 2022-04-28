import { AppContext } from "../../context/AppContext"
import { useContext, useEffect } from "react"
import { IInitialState } from "../../types"
import { Pokemon } from "../../components/Pokemon"
import { fetchItems } from "../../utils/fetchItems"

const Pokemons: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const { state:{pokemons} } = initialState

  useEffect(() => {
    fetchItems(initialState)
  }, [])

  return(
    <div className="pokemons-container">
      {pokemons.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          data={pokemon} />
      ))}
    </div>
  )
}

export { Pokemons }