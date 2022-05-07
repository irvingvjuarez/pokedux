import { useState } from "react";
import SearchIcon from "../../assets/search.svg"
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

  return(
    <form className={`search-field ${isActive && "active"}`}>
      <label htmlFor="search">
        <img src={SearchIcon} alt="" />
      </label>
      <input
        autoFocus={focus ?? false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="search"
        id="search"
        placeholder="Search..." />
    </form>
  )
}

export { SearchField }