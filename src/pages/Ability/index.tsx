import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import { IAbility, IEffect, IInitialState } from "../../types"

import { fetchFeature } from "../../utils/fetchFeature"
import { getId } from "../../utils/getId"

import { ReturnBar } from "../../components/ReturnBar"
import { Section } from "../../components/Section"
import { Spinner } from "../../components/Spinner"

const Ability: React.FC = (): JSX.Element => {
  const location = useLocation()
  const id = getId(location.pathname)
  const { state:{abilities}, addAbility } = useContext(AppContext) as IInitialState

  const [ability, setAbility] = useState<IAbility | null>(null)
  const [effect, setEffect] = useState<IEffect | undefined>(undefined)

  useEffect(() => {
    const abilityProspect = abilities.find(ability => ability.id === Number(id))
    if(!abilityProspect) fetchFeature(id, "ability", addAbility)
    if(abilityProspect) {
      const tempEffect = abilityProspect.effect_entries.find(entry => entry.language.name === "en") as IEffect
      setEffect(tempEffect)
      setAbility(abilityProspect)
    }
  }, [abilities])

  return(
    <section className="page ability">

      <article className="ability__wrapper">
        <ReturnBar />

        {ability ? (
          <>
            <h2 className="ability__title">Ability: <code>{ability.name}</code></h2>

            <div className="ability__effect">
              <h3 className="ability__effect--title">Effect</h3>
              <p className="ability__effect--effect">{effect && effect.effect}</p>

              <hr />
              <h4 className="ability__effect--subtitle">Short Effect</h4>
              <p className="ability__effect--short-effect">{effect && effect.short_effect}</p>
            </div>

            <Section title="Pokemons with this ability" list={ability.pokemon} />
          </>
        ) : (
          <Spinner />
        )}
      </article>
    </section>
  )
}

export { Ability }