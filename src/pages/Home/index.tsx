import { useContext } from "react"
import { Pokemon } from "../../components/Pokemon"
import { AppContext } from "../../context/AppContext"

const Home: React.FC = (): JSX.Element => {
  const state = useContext(AppContext)

  return(
    <section className="home">
      <div className="home__head">
        <button>Fetch Data</button>
      </div>

      <div className="pokemon-container">
        {state?.state.pokemons.map(pokemon => (
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