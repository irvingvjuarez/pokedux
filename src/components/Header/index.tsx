import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import SearchIcon from "../../assets/search.svg"

const Header: React.FC = (): JSX.Element => {
  return(
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__branding">
          <img src={Logo} alt="logo" className="header__logo" />
          <h2 className="header__title">Pokedux</h2>
        </Link>

        <button className="header__search">
          <img src={SearchIcon} alt="" />
        </button>
      </div>
    </header>
  )
}

export { Header }