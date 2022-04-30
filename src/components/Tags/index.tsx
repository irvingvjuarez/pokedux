import { IPokemonTypes } from "../../types"

interface TagsProps {
  list: IPokemonTypes[];
  align?: "center" | "flex-start" | "flex-end"
}

const Tags: React.FC<TagsProps> = ({ list, align = "flex-start" }): JSX.Element => {
  return(
    <ul className={`tags ${align}`}>
      {list.map(type => (
        <li
          className="tags__item"
          key={type.type.name} >{type.type.name}</li>
      ))}
    </ul>
  )
}

export { Tags }