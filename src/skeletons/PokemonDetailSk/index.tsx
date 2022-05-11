import { ARR } from "../../globals"

const PokemonDetailSk: React.FC = (): JSX.Element => {
  return(
    <div className="pokemon-detail-sk">
      <div className="pokemon-detail-sk__cover"></div>

      <div className="pokemon-detail-sk__profile">
        <div className="pokemon-detail-sk__head">
          <div className="pokemon-detail-sk__picture">
            <div></div>
          </div>

          <div className="pokemon-detail-sk__media">
            <div className="pokemon-detail-sk__circle"></div>
            <div className="pokemon-detail-sk__circle"></div>
            <div className="pokemon-detail-sk__circle"></div>
          </div>
        </div>

        <div className="pokemon-detail-sk__name">
          <div className="pokemon-detail-sk__title"></div>
        </div>

        <div className="pokemon-detail-sk__section">
          <div className="pokemon-detail-sk__list">
            <ul>
              <li>
                <span className="pokemon-detail-sk__bullet"></span>
                <div className="pokemon-detail-sk__item"></div>
              </li>
              <li>
                <span className="pokemon-detail-sk__bullet"></span>
                <div className="pokemon-detail-sk__item"></div>
              </li>
              <li>
                <span className="pokemon-detail-sk__bullet"></span>
                <div className="pokemon-detail-sk__item"></div>
              </li>
              <li>
                <span className="pokemon-detail-sk__bullet"></span>
                <div className="pokemon-detail-sk__item"></div>
              </li>
              <li>
                <span className="pokemon-detail-sk__bullet"></span>
                <div className="pokemon-detail-sk__item"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export { PokemonDetailSk }