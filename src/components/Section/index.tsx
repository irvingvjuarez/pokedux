import { Dropdown } from "../../components/Dropdown"
import { IList } from "../../types";

interface SectionProps {
  title: string;
  list: IList;
  isStat?: boolean
}

const Section: React.FC<SectionProps> = ({ title, list, isStat }): JSX.Element => {
  return(
    <div className="dropdown-section">
      <h2>{title}</h2>
      <Dropdown
        list={list}
        isStat={isStat} />
    </div>
  )
}

export { Section }