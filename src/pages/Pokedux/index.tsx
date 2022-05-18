import { useContext } from "react"
import { Pokemon } from "../../components/Pokemon"
import { Sidebar } from "../../components/Sidebar"
import { AppContext } from "../../context/AppContext"
import { IInitialState, IPokemon } from "../../types"

const Pokedux: React.FC = (): JSX.Element => {
  // const { state:{pokedux} } = useContext(AppContext) as IInitialState
  const pokedux = JSON.parse(window.localStorage.getItem("pokedux") as string) as IPokemon[]

  return(
    <section className="page pokedux">
      <Sidebar />

      <article className="pokedux__wrapper">
        {!pokedux && <span className="pokedux__message">Your Pokedux is empty</span>}
        
        {pokedux.length > 0 && (
          <>
            {pokedux.map(item => <Pokemon key={item.id} data={item} />)}
          </>
        )}
      </article>
    </section>
  )
}

export { Pokedux }