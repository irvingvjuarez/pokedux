import Logo from "../../assets/logo.png"
import SearchIcon from "../../assets/search.svg"

const Header: React.FC = (): JSX.Element => {
  return(
    <header className="header">
      <div className="header__wrapper">
        <div className="header__branding">
          <img src={Logo} alt="logo" className="header__logo" />
          <h2 className="header__title">Pokedux</h2>
        </div>

        <button className="header__search">
          <img src={SearchIcon} alt="" />
        </button>
      </div>
    </header>
  )
}

export { Header }