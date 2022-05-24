import { Pokemons } from "../../containers/Pokemons"
import { Sidebar } from "../../components/Sidebar"
import { Helmet } from "react-helmet"

const Home: React.FC = (): JSX.Element => {
  return(
    <section className="home page">
      <Helmet>
        <title>Home | Pokedux</title>
        <meta property="og:title" content="Home | Pokedux" />
        <meta property="og:description" content="Catch your favorite pokemons using this awesome app" />
      </Helmet>

      <Sidebar />
      <Pokemons />
    </section>
  )
}

export default Home