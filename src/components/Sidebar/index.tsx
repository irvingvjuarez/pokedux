import { Link } from "react-router-dom"

const Sidebar: React.FC = (): JSX.Element => {
  return(
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/" >Pokemons</Link>
        </li>
        <li>
          <Link to="/" >Items</Link>
        </li>
        <li>
          <Link to="/" >Machines</Link>
        </li>
        <li>
          <Link to="/" >Locations</Link>
        </li>
        <li>
          <Link to="/" >Moves</Link>
        </li>
      </ul>
    </nav>
  )
}

export { Sidebar }