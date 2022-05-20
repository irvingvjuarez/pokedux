import { Pokemon } from "../../components/Pokemon"
import { Sidebar } from "../../components/Sidebar"
import { IPokemon } from "../../types"

const Pokedux: React.FC = (): JSX.Element => {
  const pokedux = JSON.parse(window.localStorage.getItem("pokedux") as string) as IPokemon[]
  console.log("pokedux", pokedux)

  return(
    <section className="page pokedux">
      <Sidebar />

      <article className="pokedux__wrapper">
        {(!pokedux || pokedux.length === 0) && (
          <span className="pokedux__message">Your Pokedux is empty</span>
        )}
        
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