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
        {pokedux.length > 0 ? (
          <>
            {pokedux.map(item => <Pokemon key={item.id} data={item} />)}
          </>
        ) : (
          <span className="pokedux__message">Your Pokedux is empty</span>
        )}
      </article>
    </section>
  )
}

export { Pokedux }