import { useLocation } from "react-router-dom"
import { ReturnBar } from "../../components/ReturnBar"
import { getId } from "../../utils/getId"

const Ability: React.FC = (): JSX.Element => {
  const location = useLocation()
  const id = getId(location.pathname)

  return(
    <section className="page ability">

      <article className="ability__wrapper">
        <ReturnBar />
        <h2>I am the Ability #{id}</h2>
      </article>
    </section>
  )
}

export { Ability }