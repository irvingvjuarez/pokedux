import { useContext } from "react"
import { Pokemon } from "../../components/Pokemon"
import { Sidebar } from "../../components/Sidebar"
import { AppContext } from "../../context/AppContext"
import { IInitialState } from "../../types"

const Pokedux: React.FC = (): JSX.Element => {
  const { state:{pokedux} } = useContext(AppContext) as IInitialState

  return(
    <section className="page pokedux">
      <Sidebar />

      <article className="pokedux__wrapper">
        {pokedux.length > 1 ? (
          <>
            {pokedux.map(item => <Pokemon data={item} />)}
          </>
        ) : (
          <span className="pokedux__message">The Pokedux is empty</span>
        )}
      </article>
    </section>
  )
}

export { Pokedux }