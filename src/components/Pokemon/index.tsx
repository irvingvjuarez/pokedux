import { useState } from "react"
import { PokemonProps } from "./types"
import { Link } from "react-router-dom"

const Pokemon: React.FC<PokemonProps> = ({ data }): JSX.Element => {
  const { 
    sprites: {front_default, back_default},
    name,
    height,
    weight,
    base_experience,
    types,
    id
  } = data
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false)
  const handleIn = () => setIsImageHovered(true)
  const handleOut = () => setIsImageHovered(false)

  return(
    <div className="pokemon">
      <div className="pokemon__profile">
        <div className="pokemon__picture">
          <img
            onMouseOver={handleIn}
            onMouseOut={handleOut}
            src={isImageHovered ? back_default : front_default}
            alt={name} />
        </div>

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

        <ul className="pokemon__types">
          {types.map(item => (
            <li
              key={item.type.name}
              className="pokemon__type" >

              {item.type.name}
            </li>
          ))}
        </ul>
      </div>

      <Link to={`/pokemon/${name}`} className="pokemon__button">
        View Detail
      </Link>
    </div>
  )
}

export { Pokemon }