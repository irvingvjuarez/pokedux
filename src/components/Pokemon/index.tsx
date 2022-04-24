const Pokemon: React.FC = (): JSX.Element => {
  return(
    <div className="pokemon">
      <div className="pokemon__thumbnail">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
          alt="pokemon"
        />

          <div className="pokemon__types">
            <ul>
              <li>Normal</li>
              <li>Flying</li>
            </ul>
          </div>
      </div>

      <div className="pokemon__data">
        <div className="pokemon__head">
          <h2>Pidgeout</h2>
          <button>
            Add
          </button>
        </div>

        <div className="pokemon__body">
          <div className="pokemon__features">
            <h3>Height: <code>15</code></h3>
            <h3>Weight: <code>395</code></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Pokemon }