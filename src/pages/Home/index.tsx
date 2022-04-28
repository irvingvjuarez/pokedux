import { Pokemons } from "../../containers/Pokemons"

const Home: React.FC = (): JSX.Element => {
  return(
    <section className="home">
      <Pokemons />
    </section>
  )
}

export { Home }