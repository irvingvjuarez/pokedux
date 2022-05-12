import { useLocation } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar"
import { usePathName } from "../../hooks/usePathName"

const PokemonPhotos: React.FC = (): JSX.Element => {
  const location = useLocation()
  const pokemonName = usePathName(location)
  console.log("PokemonName", pokemonName)

  return(
    <section className="page pokemon-photos">
      <Sidebar />
      <h2>I am the photos page</h2>
    </section>
  )
}

export { PokemonPhotos }