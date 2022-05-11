import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ALL_SECTIONS } from "../../globals"
import { doesMatch, getMatch } from "./utils";

const Sidebar: React.FC = (): JSX.Element => {
  const location = useLocation()
  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    setPath(location.pathname)
  }, [location.pathname])

  return(
    <nav className="sidebar">
      <ul>
        {ALL_SECTIONS.map(section => {
          const detailMatch = getMatch(path, section);
          return(
            <div key={section.title}>
              <li className={`sidebar__item ${doesMatch(path, section) && "active"}`}>
                <Link to="/" >{section.title}</Link>
              </li>
              {detailMatch && (
                <h4 className="sidebar__item--detail">
                  <span>&raquo;</span>
                  {detailMatch}
                </h4>
              )}
            </div>
          )
        })}
      </ul>
    </nav>
  )
}

export { Sidebar }