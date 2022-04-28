import { PokemonProps } from "./types"

const Pokemon: React.FC<PokemonProps> = ({ name, image }): JSX.Element => {
  return(
    <div className="pokemon">
      <div className="pokemon__profile">
        <div className="pokemon__picture">
          <img src={image} alt={name} />
        </div>

        <h3 className="pokemon__name">{name}</h3>

        <ul className="pokemon__details">
          <li className="pokemon__detail">
            Height
            <span>10</span>
          </li>
          <li className="pokemon__detail">
            Experience
            <span>10</span>
          </li>
          <li className="pokemon__detail">
            Weight
            <span>10</span>
          </li>
        </ul>
      </div>

      <div className="pokemon__button">
        <button>
          View Detail
        </button>
      </div>
    </div>
  )
}

export { Pokemon }