import { AppContext } from "../../context/AppContext"
import { useContext } from "react"
import { IInitialState } from "../../types"
import { Pokemon } from "../../components/Pokemon"

const Pokemons: React.FC = (): JSX.Element => {
  const { state } = useContext(AppContext) as IInitialState

  return(
    <div className="pokemons-container">
      {state.pokemons.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default} />
      ))}
    </div>
  )
}

export { Pokemons }