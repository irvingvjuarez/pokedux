import { Pokemons } from "../../containers/Pokemons"
import { Sidebar } from "../../components/Sidebar"
import { useHelmet } from "../../hooks/useHelmet"

const Home: React.FC = (): JSX.Element => {
  useHelmet("Home | Pokedux", "Save, search and edit your favorite pokemons with this online Pokedex")

  return(
    <section className="home page">
      <Sidebar />
      <Pokemons />
    </section>
  )
}

export default Home