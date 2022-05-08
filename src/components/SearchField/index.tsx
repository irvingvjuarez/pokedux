import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom"
import SearchIcon from "../../assets/search.svg"
import { AppContext } from "../../context/AppContext";
import { IInitialState } from "../../types";
import { fetchAllResults } from "./utils"
interface SearchFieldProps {
  focus?: boolean;
  blurHandler?: () => void
}

const SearchField: React.FC<SearchFieldProps> = ({ focus, blurHandler }): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const initialState = useContext(AppContext) as IInitialState
  const { state, updateSearches } = initialState
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFocus = () => {
    fetchAllResults.init(initialState)
    setIsActive(prev => !prev)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => updateSearches(e.target.value.toLowerCase())
  const handleBlur = () => {
    blurHandler && blurHandler()
    setTimeout(() => {
      setIsActive(prev => !prev)
      updateSearches("")
    }, 200)
  }
  const handleNavigation = () => (inputRef.current as HTMLInputElement).value = ""

  return(
    <form autoComplete="off" className={`search-field ${isActive && "active"}`}>
      <label htmlFor="search">
        <img src={SearchIcon} alt="" />
      </label>
      <input
        ref={inputRef}
        autoFocus={focus ?? false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="search"
        id="search"
        placeholder="Search..."
        onChange={handleChange}
      />

      {isActive && (
        <ul className="search-field__dropdown">
          {state.searchResults.map(result => (
            <li key={result.name} onClick={handleNavigation}>
              <Link to={`/pokemon/${result.name}`}>{result.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}

export { SearchField }