import Pokemon from "../../components/Pokemon"
import { Sidebar } from "../../components/Sidebar"
import { IPokemon } from "../../types"
import { useHelmet } from "../../hooks/useHelmet"

const Pokedux: React.FC = (): JSX.Element => {
  const pokedux = JSON.parse(window.localStorage.getItem("pokedux") as string) as IPokemon[]
  useHelmet("Your pokemons | Pokedux", "See what are your saved pokemons and interact with them")

  return(
    <section className="page pokedux">
      <Sidebar />

        <article className="pokedux__wrapper">
          {(pokedux && pokedux.length > 0) ? (
            <>
              {pokedux.map(item => <Pokemon key={item.id} id={item.id} data={item} />)}
            </>
          ) : <span className="pokedux__message">Your Pokedux is empty</span>}
        </article>
    </section>
  )
}

export default Pokedux