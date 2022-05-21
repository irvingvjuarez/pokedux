import { memo } from "react"

interface PokemonSkeletonProps {
  id: string;
}

const PokemonSkeleton: React.FC<PokemonSkeletonProps> = ({ id }): JSX.Element => {
  return(
    <div className="pokemon-skeleton">
      <div className="pokemon-skeleton__wrapper">
        <div className="pokemon-skeleton__head">
          <div className="pokemon-skeleton__picture">
            <div></div>
          </div>

          <div className="pokemon-skeleton__details">
            <div className="pokemon-skeleton__detail"></div>
            <div className="pokemon-skeleton__detail"></div>
          </div>
        </div>

        <div className="pokemon-skeleton__footer">
          <div className="pokemon-skeleton__detail"></div>
        </div>
      </div>
    </div>
  )
}

export default memo(PokemonSkeleton)