import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../../context/AppContext"
import { LIMIT } from "../../globals"
import { IInitialState } from "../../types"

import { handleFetching } from "./utils"
import { useObserver } from "../../hooks/useObserver"
import { fetchItems } from "../../utils/fetchItems"
import { Pokemons } from "../../containers/Pokemons"

const Home: React.FC = (): JSX.Element => {
  const initialState = useContext(AppContext) as IInitialState
  const { state } = initialState
  const LoaderArr = new Array(LIMIT).fill(0)
  const containerFoot = useRef<null | HTMLDivElement>(null)
  
  useEffect(() => {
    fetchItems(initialState, containerFoot.current as Element)
    // const observer = useObserver(initialState)
    // observer.observe(containerFoot.current as Element)
  }, [])

  // console.log(state.pokemons)

  return(
    <section className="home">
      <Pokemons />
    </section>
  )
}

export { Home }