import { useState } from "react"
import { DropdownProps } from "./types"
const LIST_LIMIT = 4

const Dropdown: React.FC<DropdownProps> = ({ list }): JSX.Element => {
  const sublist = list.filter((item, index) => index <= LIST_LIMIT - 1)
  const [isDown, setIsDown] = useState<boolean>(false)
  const renderedList = isDown ? list : sublist
  const handleToggle = () => setIsDown(prev => !prev)

  return(
    <>
      <ul className="dropdown">
        {renderedList.map(item => (
          <li className="dropdown__item" key={item.stat.name}>
            {item.stat.name} <span>{item.base_stat}</span>
          </li>
        ))}
      </ul>

      {list.length > LIST_LIMIT && (
        <button
          onClick={handleToggle}
          className="dropdown__toggle">
          
          {isDown ? "Hide" : `See ${list.length - LIST_LIMIT} more`}
        </button>
      )}
    </>
  )
}

export { Dropdown }