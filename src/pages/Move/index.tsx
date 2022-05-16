import { useLocation } from "react-router-dom"
import { ReturnBar } from "../../components/ReturnBar"
import { getId } from "../../utils/getId"

const Move: React.FC = (): JSX.Element => {
  const { pathname } = useLocation()
  const moveID = getId(pathname)

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