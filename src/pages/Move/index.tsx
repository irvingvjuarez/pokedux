import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import { IInitialState, IListItem, IMove, IPokemonRef } from "../../types"
import { fetchFeature } from "../../utils/fetchFeature"
import { getId } from "../../utils/getId"
import { arrangeListItems } from "./utils"

import { ReturnBar } from "../../components/ReturnBar"
import { Section } from "../../components/Section"
import { ProgressBar } from "../../components/ProgressBar"

const Move: React.FC = (): JSX.Element => {
  const { pathname } = useLocation()
  const moveID = getId(pathname)

  const { state:{moves}, addMove } = useContext(AppContext) as IInitialState
  const [move, setMove] = useState<IMove | null>(null)

  useEffect(() => {
    const prospectToMove = moves.find(move => move.id === Number(moveID))
    if(prospectToMove) {

      /**
       If we already have the Move on the Global State, then, we need to arrange those items. Why?
       The format given by the API is:
       {
         name: string,
         url: string
       }

       But the format to work on the Section component is:
       {
         item: {
           name: string,
           url: string
         }
       }

       So, the arrangeListItems does that transformation
      */

      const newPokemonArr = arrangeListItems(prospectToMove.learned_by_pokemon as IListItem[], "pokemon")
      setMove({
        ...prospectToMove,
        learned_by_pokemon: newPokemonArr as unknown as IPokemonRef[]
      })
    }
    if(!prospectToMove) fetchFeature(moveID, "move", addMove)
  }, [moves])

  return(
    <section className="page move">
      <article className="move__wrapper">
        <ReturnBar />
        {move ? (
          <>
            <h2 className="move__title">Movement: <code>{move.name}</code></h2>

            <h3 className="move__subtitle">Overall information</h3>
            <ProgressBar />

            <Section title="Pokemons with this movement" list={move.learned_by_pokemon} />
          </>
        ) : (
          <span>Loading...</span>
        )}
      </article>
    </section>
  )
}

export { Move }