import { useState } from "react"
import { IStat } from "../../types"

interface DropdownProps {
  list: IStat[]
}

let componentList: IStat[]

const Dropdown: React.FC<DropdownProps> = ({ list }): JSX.Element => {
  const [isDown, setIsDown] = useState<boolean>(false)
  const [sublist] = useState(list.splice(0, 4))
  const [newList] = useState(list)
  const handleToggle = () => setIsDown(prev => !prev)
  const renderList = (listArr: IStat[]) => (<>
    {listArr.map(item => (
      <li className="dropdown__item" key={item.stat.name}>
        {item.stat.name} <span>{item.base_stat}</span>
      </li>
    ))}
  </>)

  return(
    <>
      <ul className="dropdown">
        {renderList(sublist)}

        {isDown && (
          <> {renderList(list)} </>
        )}
      </ul>

      {newList.length && (
        <button
          onClick={handleToggle}
          className="dropdown__toggle">
          See {newList.length} more
        </button>
      )}
    </>
  )
}

export { Dropdown }