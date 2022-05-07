import SearchIcon from "../../assets/search.svg"

const SearchField: React.FC = (): JSX.Element => {
  return(
    <form className="search-field">
      <label htmlFor="search">
        <img src={SearchIcon} alt="" />
      </label>
      <input type="search" id="search" placeholder="Search..." />
    </form>
  )
}

export { SearchField }