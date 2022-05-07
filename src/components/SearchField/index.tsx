import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import SearchIcon from "../../assets/search.svg"
import { AppContext } from "../../context/AppContext";
import { IInitialState } from "../../types";
interface SearchFieldProps {
  focus?: boolean;
  blurHandler?: () => void
}

const SearchField: React.FC<SearchFieldProps> = ({ focus, blurHandler }): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleFocus = () => setIsActive(prev => !prev)
  const handleBlur = () => {
    blurHandler && blurHandler()
    setIsActive(prev => !prev)
  }

  const { state } = useContext(AppContext) as IInitialState

  return(
    <form autoComplete="off" className={`search-field ${isActive && "active"}`}>
      <label htmlFor="search">
        <img src={SearchIcon} alt="" />
      </label>
      <input
        autoFocus={focus ?? false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="search"
        id="search"
        placeholder="Search..."
      />

      {isActive && (
        <ul className="search-field__dropdown">
          {state.results.map(result => (
            <li key={result.name}>
              <Link to="/">{result.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}

export { SearchField }