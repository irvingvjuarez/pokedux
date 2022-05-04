import { Pokemons } from "../../containers/Pokemons"
import { Sidebar } from "../../components/Sidebar"

const Home: React.FC = (): JSX.Element => {
  return(
    <section className="home">
      <Sidebar />
      <Pokemons />
    </section>
  )
}

export { Home }