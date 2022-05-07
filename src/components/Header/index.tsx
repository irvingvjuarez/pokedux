import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import Hamburger from "../../assets/menu.png"
import SearchIcon from "../../assets/search.svg"
import { Sidebar } from "../Sidebar"
import { SearchField } from "../SearchField"

const Header: React.FC = (): JSX.Element => {
  const [isSidebar, setIsSidebar] = useState(false)
  const handleSidebar = () => setIsSidebar(prev => !prev)

  return(
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__branding">
          <img src={Logo} alt="logo" className="header__logo" />
          <h2 className="header__title">Pokedux</h2>
        </Link>

        <div className="header__buttons">
          <button className="header__search">
            <img src={SearchIcon} alt="" />
          </button>

          <button className="header__menu" onClick={handleSidebar}>
            <img src={Hamburger} alt="" />
          </button>
        </div>

        <SearchField />
      </div>

      <div className={`header__sidebar ${isSidebar && "visible"}`}>
        <Sidebar />
      </div>
    </header>
  )
}

export { Header }