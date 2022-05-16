import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ReturnBar } from "../../components/ReturnBar"
import { AppContext } from "../../context/AppContext"
import { IAbility, IInitialState } from "../../types"

import { fetchAbility } from "./utils"
import { getId } from "../../utils/getId"

const Ability: React.FC = (): JSX.Element => {
  const location = useLocation()
  const id = getId(location.pathname)
  const { state:{abilities}, addAbility } = useContext(AppContext) as IInitialState

  const [ability, setAbility] = useState<IAbility | null>(null)

  useEffect(() => {
    const abilityProspect = abilities.find(ability => ability.id === Number(id))
    if(abilityProspect){
      setAbility(abilityProspect)
    }else{
      fetchAbility(id, addAbility)
    }
  }, [abilities])

  return(
    <section className="page ability">

      <article className="ability__wrapper">
        <ReturnBar />

        {ability ? (
          <h2>We have ability</h2>
        ) : (
          <span>Loading...</span>
        )}
      </article>
    </section>
  )
}

export { Ability }