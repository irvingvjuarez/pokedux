import { PokemonProps } from "./types"
import { Link } from "react-router-dom"
import { Tags } from "../Tags"
import { PokemonPicture } from "../PokemonPicture"
import { useEffect, useRef, useState } from "react"

const Pokemon: React.FC<PokemonProps> = ({ data }): JSX.Element => {
  const { 
    sprites: {
      front_default, back_default,
      other: { dream_world }
    },
    name,
    height,
    weight,
    base_experience,
    types
  } = data
  const [isBack, setIsBack] = useState(false)
  const handleChange = () => setIsBack(prev => !prev)

  return(
    <div className="pokemon">
      <div className="pokemon__profile">
        <div className="pokemon__head">
          <h3>{isBack ? "Anime" : "Normal"}</h3>

          <div className={`pokemon__switch ${isBack && "on"}`}>
            <label htmlFor={`switch-${name}`} ></label>
            <input onClick={handleChange} type="radio" id={`switch-${name}`} hidden />
          </div>
        </div>

        <PokemonPicture
          front={isBack ? dream_world.front_default : front_default}
          back={back_default}
          alt={name}
          containerSide="110px"
        />

        <h3 className="pokemon__name">{name}</h3>

        <ul className="pokemon__details">
          <li className="pokemon__detail">
            Height
            <span>{height}</span>
          </li>
          <li className="pokemon__detail">
            Experience
            <span>{base_experience}</span>
          </li>
          <li className="pokemon__detail">
            Weight
            <span>{weight}</span>
          </li>
        </ul>

        <Tags list={types} align="center"/>
      </div>

      <Link to={`/pokemon/${name}`} className="pokemon__button">
        View Detail
      </Link>
    </div>
  )
}

export { Pokemon }