import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../../context/AppContext"
import { IInitialState } from "../../types"

import { fetchItems } from "../../utils/fetchItems"
import { Pokemons } from "../../containers/Pokemons"

const Home: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const containerFoot = useRef<null | HTMLDivElement>(null)
  
  useEffect(() => {
    fetchItems(initialState, containerFoot.current as Element)
  }, [])

  return(
    <section className="home">
      <Pokemons />
    </section>
  )
}

export { Home }