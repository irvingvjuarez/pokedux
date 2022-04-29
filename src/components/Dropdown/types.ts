import { IStat, IGenericItem, IMove } from "../../types"

export interface DropdownProps {
  list: IStat[] | IGenericItem[] | IMove[];
  isStat?: boolean;
  // list: IStat[]
}