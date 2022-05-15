import { ReturnBar } from "../../components/ReturnBar"

const Ability: React.FC = (): JSX.Element => {
  return(
    <section className="page ability">
      <ReturnBar />
      <h2>I am the Ability page</h2>
    </section>
  )
}

export { Ability }