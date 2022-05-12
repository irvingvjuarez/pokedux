import { Sidebar } from "../../components/Sidebar"

const PokemonPhotos: React.FC = (): JSX.Element => {
  return(
    <section className="page pokemon-photos">
      <Sidebar />
      <h2>I am the photos page</h2>
    </section>
  )
}

export { PokemonPhotos }