import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Sidebar: React.FC = (): JSX.Element => {
  const location = useLocation()
  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    setPath(location.pathname)
  }, [location.pathname])

  return(
    <nav className="sidebar">
      <ul>
        <li className={`sidebar__item ${path === "/" && "active"}`}>
          <Link to="/" >Pokemons</Link>
        </li>
        <li className={`sidebar__item ${path === "/items" && "active"}`}>
          <Link to="/items" >Items</Link>
        </li>
        <li className={`sidebar__item ${path === "/machines" && "active"}`}>
          <Link to="/machines" >Machines</Link>
        </li>
        <li className={`sidebar__item ${path === "/locations" && "active"}`}>
          <Link to="/locations" >Locations</Link>
        </li>
        <li className={`sidebar__item ${path === "/moves" && "active"}`}>
          <Link to="/moves" >Moves</Link>
        </li>
      </ul>
    </nav>
  )
}

export { Sidebar }