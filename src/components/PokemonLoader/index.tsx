const PokemonLoader: React.FC = (): JSX.Element => {
  return(
    <div className="pokemon-loader">
      <div className="pokemon-loader__thumbnail"></div>
      <div className="pokemon-loader__data">
        <div className="pokemon-loader__image"></div>
        <div className="pokemon-loader__text-line"></div>
      </div>
    </div>
  )
}

export { PokemonLoader }