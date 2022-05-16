import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ReturnBar } from "../../components/ReturnBar"
import { AppContext } from "../../context/AppContext"
import { IInitialState, IMove } from "../../types"
import { fetchFeature } from "../../utils/fetchFeature"
import { getId } from "../../utils/getId"

const Move: React.FC = (): JSX.Element => {
  const { pathname } = useLocation()
  const moveID = getId(pathname)

  const { state:{moves}, addMove } = useContext(AppContext) as IInitialState
  const [move, setMove] = useState<IMove | null>(null)

  useEffect(() => {
    const prospectToMove = moves.find(move => move.id === Number(moveID))
    if(prospectToMove) setMove(prospectToMove)
    if(!prospectToMove) fetchFeature(moveID, "move", addMove)
  }, [moves])

  return(
    <section className="page move">
      <article className="move__wrapper">
        <ReturnBar />
        {move ? (
          <h2>We have move</h2>
        ) : (
          <span>Loading...</span>
        )}
      </article>
    </section>
  )
}

export { Move }