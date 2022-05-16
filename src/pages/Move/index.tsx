import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ReturnBar } from "../../components/ReturnBar"
import { AppContext } from "../../context/AppContext"
import { IInitialState, IMove } from "../../types"
import { getId } from "../../utils/getId"

const Move: React.FC = (): JSX.Element => {
  const { pathname } = useLocation()
  const moveID = getId(pathname)

  // const { state:{moves} } = useContext(AppContext) as IInitialState
  // const [move, setMove] = useState<IMove | null>(null)

  // useEffect(() => {
  //   const prospectToMove = moves.find(move => move.id === Number(moveID))
  //   if(prospectToMove) setMove(prospectToMove)
  //   if(!prospectToMove) console.log("")
  // }, [])

  return(
    <section className="page move">
      <article className="move__wrapper">
        <ReturnBar />
        <h2>I am the Move #{moveID}</h2>
      </article>
    </section>
  )
}

export { Move }